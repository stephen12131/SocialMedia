import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ExamplefunctionsComponent } from './examplefunctions/examplefunctions.component';
import { ParentComponent } from './parent/parent.component';
import { FormscontrolexampleComponent } from './formscontrolexample/formscontrolexample.component';
import { MessagingComponent } from './messaging/messaging.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  //{ path: 'home', component: HomeComponent },  
  { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },  
  { path: 'user', component: UserdetailsComponent },
  { path: 'd', component: ExamplefunctionsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'forms', component: FormscontrolexampleComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
 { path: 'pipe', component: PipesComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
