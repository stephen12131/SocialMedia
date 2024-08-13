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

@NgModule({
  declarations: [
    AppComponent
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,   
    HomeModule,
    UserdetailsModule,
    ExampleFunctionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
