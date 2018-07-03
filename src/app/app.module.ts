import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent, ModelFormComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppLoadModule } from './app-load/app-load.module';

@NgModule({
  declarations: [
    AppComponent, ModelFormComponent

  ],
  imports: [
    BrowserModule,
    AppLoadModule,
    FormsModule,
    ReactiveFormsModule,
    
    // other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
