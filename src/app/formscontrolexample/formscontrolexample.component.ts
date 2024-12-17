import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { TemplatedrivenFormService } from '../template-driven-form/templatedriven-form.service';

@Component({
  selector: 'app-formscontrolexample',
  templateUrl: './formscontrolexample.component.html',
  styleUrls: ['./formscontrolexample.component.css']
})
export class FormscontrolexampleComponent implements OnInit{
  userForm!: FormGroup;
  roles = [
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
    { value: 'guest', label: 'Guest' }
  ];
  submittedData: any = null;
  customEmailError: boolean = false;

  constructor(private fb: FormBuilder, private service: TemplatedrivenFormService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, this.alphanumericValidator()]],
      email: ['', [Validators.required, Validators.email, this.customEmailValidator()]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      role: ['', Validators.required],
      agree: [false, Validators.requiredTrue]
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.service.saveUser(this.userForm.value).subscribe(
        (response) => {
          this.submittedData = response;
          console.log('Response:', this.submittedData);
          this.userForm.reset();
        },
        (error) => {
          console.error('Error saving user:', error);
        }
      );
    } else {
      console.error('Form is invalid or has errors');
    }
  }

  // Custom alphanumeric validator
  alphanumericValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const pattern = /^[a-zA-Z0-9 ]*$/;
      return pattern.test(control.value) ? null : { alphanumeric: true };
    };
  }

  // Custom email validator for disallowed domains
  customEmailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const disallowedDomains = ['notallowed.com', 'banned.com'];
      if (control.value) {
        const domain = control.value.split('@')[1];
        if (domain && disallowedDomains.includes(domain)) {
          this.customEmailError = true;
          return { domainNotAllowed: true };
        }
      }
      this.customEmailError = false;
      return null;
    };
  }
}