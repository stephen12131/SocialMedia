import { Component, OnInit } from '@angular/core';
import { ExampleFunctionService } from './examplefunctions.service';
import { catchError, concatMap, delay, filter, from, map, mergeMap, of, reduce, retry, tap } from 'rxjs';

@Component({
  selector: 'app-examplefunctions',
  templateUrl: './examplefunctions.component.html',
  styleUrls: ['./examplefunctions.component.css']
})
export class ExamplefunctionsComponent implements OnInit {
  data: any;

  constructor(private dataService: ExampleFunctionService) { }

  ngOnInit(): void {
    //new subscribe here we use extra next for success
    this.dataService.getData().subscribe({
      next: (response) => {
        this.data = response;
      },
      error: (err) => {
        console.error('Error loading local JSON file', err);
      },
      complete: () => {
        // Optional: Handle completion if needed
        console.log('Data loading complete');
      }
    });

  }

  exampleObservableFunction() {
    this.dataService.getData().pipe(
      // Retry the observable up to 3 times in case of error
      //retry(3),

      // Use concatMap to handle each item individually if getData returns an array
      concatMap(items => from(items)),

      // Filter out completed items
      filter((item: any) => !item.completed),

      // Map to include a new field, handle undefined title
      map((item: any) => ({
        ...item,
        title: item.title ? item.title.toUpperCase() : 'UNKNOWN TITLE' // Handle undefined title
      })),

      // Log each filtered and mapped item
      tap(item => console.log('Filtered and mapped item:', item)),

      // Accumulate total number of items
      reduce((acc, item) => acc + 1, 0),

      // For demonstration, simulate data emission with delay
      // Convert the count to a string message
      map(count => `Total incomplete items: ${count}`),

      // Catch any errors
      catchError(err => {
        console.error('Error:', err);
        return of('An error occurred');
      })
    ).subscribe(result => {
      this.data = result;
    });
  
  }
}



