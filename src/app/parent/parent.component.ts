import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  @ViewChild(ChildComponent) childComponent!: ChildComponent;
  userInfo: string = '';

  user={id:1,
    name:"stephen",
    email:"stephen@gmail.com"
  };
  selectedUser: any;

  onUserClicked(user:any){
 this.selectedUser=user;
  }
  showUserInfo() {
    this.userInfo = this.childComponent.getUserInfo();
  }

}
