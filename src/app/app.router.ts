import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { WeatherdetailsComponent } from './weatherdetails/weatherdetails.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'weather/:id', component: WeatherdetailsComponent },
  { path: 'search/:term', component: SearchComponent }
  //not found
  //{ path: "**", component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})


export class AppRouter { }