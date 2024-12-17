import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TemplatedrivenFormService {

  constructor(private http:HttpClient) { }
  private apiUrl = 'http://localhost:8090/api/users/save'; 
 
 
  saveUser(user:any):Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}
