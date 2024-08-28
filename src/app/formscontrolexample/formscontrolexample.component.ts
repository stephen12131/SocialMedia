import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formscontrolexample',
  templateUrl: './formscontrolexample.component.html',
  styleUrls: ['./formscontrolexample.component.css']
})
export class FormscontrolexampleComponent implements OnInit{
  mycontrolform!:FormGroup;
  constructor(private form:FormBuilder){}
  ngOnInit(): void {

    this.mycontrolform=this.form.group({
     username :['',[
      Validators.required,
      Validators.minLength(2)
     ]],
     email:['',[
      Validators.required,
      Validators.email
     ]]

    })
   
  }

  formSUbmit(){

  }

  get username(){
    return this.mycontrolform.get('username');
  }
  get email(){
    return this.mycontrolform.get('email');
  }
}
