import { Component, OnInit, trigger, state, style, transition, animate, HostBinding, OnDestroy } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
import { WeatherService } from './../weather.service';
import { SharedDataService } from './../services/sharedDataService';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  wheatherStaticPath: string = "";
  title = 'app';
  weathers = [];
  private counter = 0;
  private cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
  constructor(
    private weatherService: WeatherService, 
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    this.getData();
    this.wheatherStaticPath = this.sharedDataService.weatherStaticEndPoint;
  }

  getData() {
    this.weatherService.searchWeather(this.cities[this.counter])
    .subscribe(
      data => {
        console.log(data[0]);
        this.fetchWeatherDetails(data[0]);
      },
      error => {
        console.log(error);
      });
  }

  fetchWeatherDetails(data) {
    this.weatherService.getLocationData(data.woeid)
    .subscribe(
      response => {
        console.log(response);
        this.counter++;
        this.weathers.push({
          "title": response.title,
          "the_temp": parseFloat(response.consolidated_weather[0].the_temp).toFixed(2),
          "min_temp": parseFloat(response.consolidated_weather[0].min_temp).toFixed(2),
          "max_temp": parseFloat(response.consolidated_weather[0].max_temp).toFixed(2),
          "humidity": parseFloat(response.consolidated_weather[0].humidity).toFixed(2) + "%",
          "weather_state_name": response.consolidated_weather[0].weather_state_name,
          "applicable_date": response.consolidated_weather[0].applicable_date,
          "woeid": response.woeid,
          "icon_url": this.sharedDataService.weatherStaticEndPoint + response.consolidated_weather[0].weather_state_abbr + ".svg"
        });
        if (this.counter <= 5) {
          this.getData();
        } else {
          this.isLoading = false;
        }
      },
      error => {
        console.log(error);
      });
  }

  goToWeatherDetails(id) {
    this.router.navigate(['/weather', id]);
  }

  ngOnDestroy() {

  }
  
}
                     