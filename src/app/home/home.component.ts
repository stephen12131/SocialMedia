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

interface GroupedData {
  user: any;
  post: any;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  groupedData: GroupedData[] = [];














  posts: Post[] = [];
  userpost:UserPost[]=[];
  selectedProduct!: Post;
  constructor(private homeService: HomeService, private messageService: MessageService,private router: Router,private userdetailsService:UserdetailsService ) {}

    ngOnInit() {
      // this.userdetailsService.getlistOFUsers().subscribe((users:any)=>{
      //   users.forEach((user:any) => {
      //     this.homeService.getPosts().subscribe(posts => {
         
  
      //       const filteredPosts = posts.filter((post: any) => post.userId === user.id);
           
  
      //       const userPost = new UserPost(user);
      //       userPost.posts = filteredPosts;
      //       userPost.posts = filteredPosts;
      //       this.userpost.push(userPost);
            
      //     });
      //   });
      //   console.log('User Post:', this.userpost); 
      // });
      

      this.loadData();
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

    getSeverity(status: string) {}

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

}
