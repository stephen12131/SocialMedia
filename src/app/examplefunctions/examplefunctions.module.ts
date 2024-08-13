import { NgModule } from "@angular/core";
import { ExamplefunctionsComponent } from "./examplefunctions.component";
import { CommonModule } from "@angular/common";
import { ExampleFunctionService } from "./examplefunctions.service";

@NgModule({
    declarations: [ExamplefunctionsComponent],
    imports: [
      CommonModule
      
    ],
    providers: [ExampleFunctionService],
  })
  export class ExampleFunctionModule { }
  