import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { HomeService } from './home.service';
import { HttpClientModule } from '@angular/common/http';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { UserdetailsService } from '../userdetails/userdetails.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    HttpClientModule,
    ToastModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HomeService,MessageService,UserdetailsService],
})
export class HomeModule { }
