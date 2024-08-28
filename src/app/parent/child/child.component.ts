import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() user:any;
  @Output() userClicked = new EventEmitter();

  selectUser() {
    this.userClicked.emit(this.user);
  }


  //viewChild EXample
  getUserInfo(): string {
    return `Name: ${this.user.name}, Email: ${this.user.email}`;
  }

}
