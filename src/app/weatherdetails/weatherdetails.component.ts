import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService } from './../weather.service';
import { SharedDataService } from './../services/sharedDataService';

@Component({
  selector: 'app-weatherdetails',
  templateUrl: './weatherdetails.component.html',
  styleUrls: ['./weatherdetails.component.css']
})
export class WeatherdetailsComponent implements OnInit {
  private woeid: number = 0;
  isLoading: boolean = true;
  title: string = "";
  weathers = [];
  constructor(private weatherService: WeatherService, 
    private sharedDataService: SharedDataService,
    private route: ActivatedRoute,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
      
    }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.woeid = params['id'];
   });
    this.fetchWeatherDetails();
  }

  fetchWeatherDetails() {
    this.weatherService.getLocationData(this.woeid)
    .subscribe(
      response => {
        console.log(response);
        this.getSixDayWeatherReport(response.consolidated_weather);
        this.title = response.title;
        this.isLoading = false;
        console.log(this.weathers);
      },
      error => {
        console.log(error);
      });
  }

  getSixDayWeatherReport(weather) {
    for (let i = 0; i < 6 && i < weather.length; ++i) {
      this.weathers.push(this.getDayWeatherReport(weather[i]));
    }
    console.log(this.weathers);
  }

  getDayWeatherReport(weather) {
    let objData = {
      "title": this.title,
      "applicable_date": weather.applicable_date,
      "day": this.getDay(weather.applicable_date),
      "abbr": weather.weather_state_abbr,
      "state_name": weather.weather_state_name,
      "the_temp": parseFloat(weather.the_temp).toFixed(2),
      "max_temp": parseFloat(weather.max_temp).toFixed(2),
      "min_temp": parseFloat(weather.min_temp).toFixed(2),
      "wind_direction_compass": weather.wind_direction_compass,
      "wind_speed": weather.wind_speed,
      "humidity": weather.humidity + '%',
      "icon_url": this.sharedDataService.weatherStaticEndPoint + weather.weather_state_abbr + ".svg"
    }
    return objData;
  }

  getDay(date) {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let d = new Date(date);
    let dayName = days[d.getDay()];
    return dayName;
  }

  redirectWeatherUrl(event: any): any {
    return false;
  }
  

}
