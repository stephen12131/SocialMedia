import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { HomeService } from './home.service';
import { Post } from '../model/Post';
import { UserPost } from '../model/UserPost';
import { Router } from '@angular/router';
import { UserdetailsService } from '../userdetails/userdetails.service';
import { Address } from '../model/Address';
import { Company } from '../model/company';
import { User } from '../model/User';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { catchError, forkJoin, map, mergeMap, of, tap } from 'rxjs';

interface GroupedData {
  user: any;
  post: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  groupedData: GroupedData[] = [];
  groupedDataTemp: GroupedData[] = [];
  posts: Post[] = [];
  userpost: UserPost[] = [];
  selectedProduct!: Post;

  //forms
  userForm: FormGroup;
  name!: any;
  selectedCountryCode: string = '';
  selectedCountryName: string = '';
  regexPattern: RegExp = /^[a-zA-Z\s]*$/;

  search!: any;

  countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' },
    { name: 'United Kingdom', code: 'UK' },
    // Add more countries as needed
  ];
  constructor(private homeService: HomeService, private messageService: MessageService, private router: Router, private userdetailsService: UserdetailsService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20),
        Validators.pattern('^[a-zA-Z0-9]+$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]],
      country: ['', [
        Validators.required
      ]]
    });
  }
  lessons = ['Lesson 1', 'Lessons 2'];
  ngOnInit() {


    // this.loadData();
    //this.loadDataByUsingmergeMap();
    //this.loadDataByUsingForkJoin();
    this.loadDataByUsingPromise();
  }

  navigateToNextPage(userId: number) {
    this.userdetailsService.changeId(userId);
    console.log(userId); // Log the userId to verify
    this.router.navigate(['/user']); // Navigate to 'user' route
  }

  onRowSelect(event: any) {

    this.messageService.add({ severity: 'info', summary: 'Product Selected', detail: event.data.userId });
    this.userdetailsService.changeId(event.data.userId);
    this.router.navigate(['/user']);
  }

  onRowUnselect(event: any) {
    this.messageService.add({ severity: 'info', summary: 'Product Unselected', detail: event.data.name });
  }

  getSeverity(status: string) { }

  loadData() {
    this.userdetailsService.getlistOFUsers().subscribe(users => {
      this.homeService.getPosts().subscribe(posts => {
        this.groupedData = this.groupDataByUser(users, posts);
      });
    });
  }

  groupDataByUser(users: any[], posts: any[]): GroupedData[] {
   
    return posts.map(post => {
      const user = users.find(user => user.id === post.userId);
     
      return { user, post };
    });
  }



  ///save data
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted!', this.userForm.value);
    } else {
      console.error('Form is invalid');
    }
  }

  onSubmit1(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted!', this.name);
    }
  }

  onCountryChange(event: Event) {
    this.selectedCountryName = this.getCountryName(this.selectedCountryCode);
    console.log('Selected country code:', this.selectedCountryCode);
    console.log('Selected country name:', this.selectedCountryName);
  }

  getCountryName(code: string): string {
    const country = this.countries.find(c => c.code === code);
    return country ? country.name : 'Unknown';
  }
  onInputChange() {
    console.log(this.name);
    if (!this.regexPattern.test(this.name)) {
      this.name = this.name.replace(/[^a-zA-Z0-9\s]/g, '');

      console.log('Invalid input!');
    }
  }
  onInputChangeReactiveFOrm() {
    const n = this.search;
    if (n != '' && n != null) {


      this.groupedDataTemp = this.groupedData.filter(f =>
        f.user.name.toLowerCase().startsWith(n.toLowerCase())
      );

      console.log(this.groupedDataTemp);

      if (this.groupedDataTemp.length > 0 || n != '' || n != null) {
        console.log("Not Null", this.groupedDataTemp);
        this.groupedData = this.groupedDataTemp;
      }

    } else {
      this.loadData();
    }



  }

  loadDataByUsingmergeMap() {
    // Get the list of users first
    this.userdetailsService.getlistOFUsers().pipe(
      catchError(error => {
        console.error('Error loading users', error);
        return of([]); // Return an empty array in case of error
      }),
      mergeMap(users => {
        // After getting users, get posts
        return this.homeService.getPosts().pipe(
          catchError(error => {
            console.error('Error loading posts', error);
            return of([]); // Return an empty array in case of error
          }),
          map(posts => this.groupDataByUser(users, posts)),
          tap(groupedData => console.log('Grouped Data:', groupedData))
        );
      })
    ).subscribe(
      groupedData => {
        console.log("From MergedMap Method");
        this.groupedData = groupedData;
      },
      error => {
        console.error('Error in processing data', error);
      }
    );
  }

  loadDataByUsingForkJoin(){
    forkJoin({
      users: this.userdetailsService.getlistOFUsers().pipe(catchError(error => of([]))),
      posts: this.homeService.getPosts().pipe(catchError(error => of([])))
    }).pipe(
      map(({ users, posts }) => this.groupDataByUser(users, posts))
    ).subscribe(
      groupedData => {
        console.log("From forkJoin Method");
        this.groupedData = groupedData;
      },
      error => {
        console.error('Error loading data', error);
      }
    );
  }

  async loadDataByUsingPromise(): Promise<void> {
    try {
      const [posts, users] = await Promise.all([
        this.homeService.getPostsbyUsingPromise(),
        this.homeService.getlistOFUsersbyUsingPromise()
      ]);
      console.log("From Promise Method");
     
      this.groupedData = this.groupDataByUser(users, posts);
     
    } catch (error) {
      console.error('Error loading data', error);
    }

  }

}
