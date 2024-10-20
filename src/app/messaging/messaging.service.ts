import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';

@Injectable({
  providedIn: 'root',
})
export class MessagingService {
  private client: Client;
  private messageSubject = new BehaviorSubject<string>('');

  constructor() {
    this.client = new Client({
      brokerURL: 'ws://localhost:8081/ws',  // WebSocket URL
      connectHeaders: {},
      debug: function (str) {
        console.log(str);
      },
      reconnectDelay: 5000,  // Auto reconnect after 5 seconds
      webSocketFactory: () => {
        return new SockJS('http://localhost:8081/ws');  // Using SockJS
      },
    });

    this.client.onConnect = () => {
      this.client.subscribe('/topic/driverUpdates', (message) => {
        this.messageSubject.next(message.body);
      });
    };

    this.client.activate();
  }

  receiveMessages(): Observable<string> {
    return this.messageSubject.asObservable();
  }

  disconnectSocket() {
    this.client.deactivate();
  }
}
