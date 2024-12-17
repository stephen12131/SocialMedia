import { Pipe, PipeTransform } from "@angular/core"
import { pipe } from "rxjs"



@Pipe({
    name: 'capitalize',
    pure: true // Default is true, but explicitly shown here
  })
export class PurePie implements PipeTransform   {
    transform(value: any) {
        if (!value) {
            return '';
          }
          var value1=value.split(' ').map((word:any) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
          return value1;
    }

}