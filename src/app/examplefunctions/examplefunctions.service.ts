import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
  })
export class ExampleFunctionService{
    private jsonUrl = 'assets/data.json'; // Path to your local JSON file

    constructor(private http: HttpClient) {}
  
    getData(): Observable<any> {
      return this.http.get<any>(this.jsonUrl);
    }

    
}