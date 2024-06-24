import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../model/User';
import {Comment}   from '../model/Comment';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  private idSource = new BehaviorSubject<number>(0);
  currentId = this.idSource.asObservable();

  private listOfUsers = 'https://jsonplaceholder.typicode.com/users';
  private posts = 'https://jsonplaceholder.typicode.com/posts';
 


  constructor(private http: HttpClient) { }

  changeId(id: number): void {
    this.idSource.next(id);
  }

  getlistOFUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.listOfUsers);
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.listOfUsers}/${userId}`);
  }

  getCommentsUserById(userId: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.posts}/${userId}/comments`);
  }
}
