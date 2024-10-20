import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagingService } from './messaging.service';
import { MessagingComponent } from './messaging.component';




@NgModule({
  declarations: [MessagingComponent],
  imports: [
    CommonModule
  ],
  providers: [MessagingService],
})
export class MessagingModule { }
