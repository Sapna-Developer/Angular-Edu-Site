import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { HttpService } from './data.service';

import {MatNativeDateModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialExampleModule} from './material.module';




@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],

  declarations: [AppComponent, HeaderComponent, CoursesComponent],
  bootstrap: [AppComponent],
  providers: [HttpService],
})
export class AppModule {}
