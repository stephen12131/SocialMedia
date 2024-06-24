import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from './userdetails.service';
import { User } from '../model/User';
import {Comment}   from '../model/Comment';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit{
  id!: number;
  users!: User[];
  userDetails!:User;
  comment!:Comment[];
  constructor(private router: Router,private userdetailsService:UserdetailsService ) {}

  ngOnInit() {
    this.userdetailsService.currentId.subscribe(id => {
      this.userdetailsService.getUserById(id).subscribe(user=>{
        this.userDetails=user;
        console.log(this.userDetails);
      });

      
      this.userdetailsService.getCommentsUserById(id).subscribe((cmnt:any)=>{
        this.comment=cmnt;
        console.log(this.comment);
      });
     
     
      
    });

    // this.userdetailsService.getlistOFUsers().subscribe(users => {
    //   this.users = users;
    //   console.log(this.users);
    // });
    
  }

  redirectToHomeComponent(): void {
    this.router.navigate(['/home']);
    
  }
}
