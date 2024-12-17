import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
  //pure pipe
  text: string = 'angular pure pipe example';

//impure pipe
  items = [
    { name: 'Item 1', active: true },
    { name: 'Item 2', active: false }
  ];

  toggleItemActive() {
    this.items[1].active = !this.items[1].active; // Toggle the 'active' state
  }


  //default pipe
  today = new Date();
  amount = 12345.6789;
  jsonData = { name: 'John', age: 30, skills: ['Angular', 'TypeScript'] };
  items1 = ['Angular', 'React', 'Vue', 'Svelte'];
  asyncValue = new Promise<string>((resolve) => {
    setTimeout(() => resolve('Async Pipe Example!'), 3000);
  });

}
