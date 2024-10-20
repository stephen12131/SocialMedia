import { Component, OnDestroy, OnInit } from '@angular/core';
import { MessagingService } from './messaging.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit, OnDestroy {
  receivedMessage: string = '';
  private messageSubscription!: Subscription;

  constructor(private messagingService: MessagingService) {}

  ngOnInit(): void {
    this.messageSubscription = this.messagingService.receiveMessages().subscribe((message: string) => {
      this.receivedMessage = message;
    });
  }

  ngOnDestroy(): void {
    this.messageSubscription.unsubscribe();
    this.messagingService.disconnectSocket();
  }
}
