import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ExamplefunctionsComponent } from './examplefunctions/examplefunctions.component';
import { ParentComponent } from './parent/parent.component';
import { FormscontrolexampleComponent } from './formscontrolexample/formscontrolexample.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'hpme', component: HomeComponent },
  { path: 'user', component: UserdetailsComponent },
  { path: 'd', component: ExamplefunctionsComponent },
  { path: 'parent', component: ParentComponent }
 // { path: '', component: FormscontrolexampleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
