import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdetailsService } from './userdetails.service';
import { HttpClientModule } from '@angular/common/http';
import { UserdetailsComponent } from './userdetails.component';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [UserdetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    CardModule,
    TableModule,
    ButtonModule
  ],
  providers: [UserdetailsService],
})
export class UserdetailsModule { }
