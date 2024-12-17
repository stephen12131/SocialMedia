import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Post } from '../model/Post';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  private SUb =new BehaviorSubject<string>("");
  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    this.SUb.next("");
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPostsbyUsingPromise(): Promise<any[]> {
    return this.http.get<any[]>(this.apiUrl).toPromise().then(posts => posts ?? []);
  }

  getlistOFUsersbyUsingPromise(): Promise<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users').toPromise().then(users => users ?? []);
  }
}
