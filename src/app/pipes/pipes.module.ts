import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurePie } from './purepipe';
import { PipesComponent } from './pipes.component';
import { ImpureFilterPipe } from './ImpureFilterPipe';



@NgModule({
  declarations: [PipesComponent,PurePie,ImpureFilterPipe],
  imports: [
    CommonModule,
    
  ]
})
export class PipesModule { }
