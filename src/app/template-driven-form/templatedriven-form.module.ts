import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TemplatedrivenFormService } from './templatedriven-form.service';



@NgModule({
  declarations: [TemplateDrivenFormComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule, // Include FormsModule for template-driven forms
    HttpClientModule
  ],
  providers :[TemplatedrivenFormService]
})
export class TemplatedrivenFormModule { }
