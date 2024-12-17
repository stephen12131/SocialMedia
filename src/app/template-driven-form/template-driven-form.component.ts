import { Component } from '@angular/core';
import { TemplatedrivenFormService } from './templatedriven-form.service';
import { User } from '../model/User1';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {
  user !:User;

  roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' }
  ];

  constructor(private service:TemplatedrivenFormService){
    this.user= new User();
  }

  customEmailError: boolean = false;
  submittedData: any = null;

  onSubmit(form: any) {
    if (form.valid && !this.customEmailError) {
     

      this.service.saveUser(this.user).subscribe(
        (response) => {
          this.submittedData = response;
          console.log('response ', this.submittedData);
          form.reset();
        },
        (error) => {
          console.error('Error saving user:', error);
        }
      );
      console.log('Form Submitted:', this.user);
    } else {
      console.error('Form is invalid or has errors');
    }
  }

  /**
   * Restrict input to alphanumeric characters for the Name field
   */
  allowAlphanumeric(event: KeyboardEvent) {
    const pattern = /^[a-zA-Z0-9 ]+$/;
    const inputChar =event.key;
    // String.fromCharCode(event.keyCode || event.which);

    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  /**
   * Restrict unwanted characters in Email field
   */
  restrictSpecialCharacters(event: KeyboardEvent) {
    const invalidChars = /[&%$#^*]/;
    const inputChar = event.key;
    //String.fromCharCode(event.keyCode || event.which);

    if (invalidChars.test(inputChar)) {
      event.preventDefault();
    }
  }

  /**
   * Validate custom domain for the email field
   */
  validateEmailDomain() {
    const disallowedDomains = ['notallowed.com', 'banned.com'];
    const email = this.user.email;
  
    if (email) {
      const domain = email.split('@')[1];
      this.customEmailError = domain ? disallowedDomains.includes(domain) : false;
    } else {
      this.customEmailError = false;
    }
  }
  
}
