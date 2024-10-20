import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

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
      Validators.minLength(2),
      this.forbiddenUsernameValidator('admin')//check out input username is admin or not??
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

  

 forbiddenUsernameValidator(forbiddenName: string): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    // Check if the control's value matches the forbidden name
    const currentValue = control.value;
    let forbidden: boolean;

    // If the value matches the forbidden name, set forbidden to true
    if (currentValue === forbiddenName) {
      forbidden = true;
    } else {
      forbidden = false;
    }

    // Use if-else to return the error object or null based on the forbidden variable
    if (forbidden) {
      return { forbiddenUsername: { value: currentValue } };
    } else {
      return null;
    }
  };
}

}
