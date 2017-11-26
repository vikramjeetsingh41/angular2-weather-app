import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { SharedDataService } from './services/sharedDataService';
import { AppRouter } from './app.router';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';
import { WeatherComponent } from './weather/weather.component';

const APP_PROVIDERS = [
  WeatherService,
  SharedDataService
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherdetailsComponent,
    MainComponent,
    SearchComponent,
    WeatherComponent
  ],
  imports: [
    AppRouter,
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule
  ],
  providers: [
    APP_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
