import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';

import { UserdetailsModule } from './userdetails/userdetails.module';
import { ExamplefunctionsComponent } from './examplefunctions/examplefunctions.component';
import { ExampleFunctionModule } from './examplefunctions/examplefunctions.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ParentModule } from './parent/parent.module';
import { FormscontrolexampleComponent } from './formscontrolexample/formscontrolexample.component';
import { FormscontrolexampleModule } from './formscontrolexample/formscontrolexample.module';
import { MessagingComponent } from './messaging/messaging.component';
import { MessagingModule } from './messaging/messaging.module';

@NgModule({
  declarations: [
    AppComponent,
    
      
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    HomeModule,
    UserdetailsModule,
    ExampleFunctionModule,
    ParentModule,
    FormscontrolexampleModule,
    MessagingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
