import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormscontrolexampleComponent } from './formscontrolexample.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

//lazy load modules
const routes: Routes = [
  { path: '', component: FormscontrolexampleComponent }
];

@NgModule({
  declarations: [FormscontrolexampleComponent],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class FormscontrolexampleModule { }
