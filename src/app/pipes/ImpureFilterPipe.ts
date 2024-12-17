import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureFilter',
  pure: false // Marking it as an impure pipe
})
export class ImpureFilterPipe implements PipeTransform {
  transform(items: any[]): any[] {
    console.log('Impure pipe executed!');
      // Filter active items and transform names to uppercase
      const filteredItems = items
      .filter(item => item.active)
      .map(item => item.name.toUpperCase()); 

    console.log('Filtered Items:', filteredItems); // Debugging log to see the result

    return filteredItems; // Return the final result
  }
}
