import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainComponent } from './pages/main/main.component';
import { FormSearchComponent } from './pages/components/form-search/form-search.component';
import { ScreenComponent } from './pages/components/screen/screen.component';

import {MatNativeDateModule} from '@angular/material/core';
import { MaterialCoreModule } from '../material.module'


@NgModule({
  declarations: [
    AppComponent, 
    MainComponent,
    FormSearchComponent,
    ScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialCoreModule,
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
