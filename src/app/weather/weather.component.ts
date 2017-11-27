import { Component, Input, Output, OnInit, trigger, state, style, transition, animate, HostBinding, OnDestroy, EventEmitter } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
import { WeatherService } from './../weather.service';
import { SharedDataService } from './../services/sharedDataService';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input('weatherInfo') weathers: any;
  @Input('day') day: boolean = false;
  @Input('title') title: boolean = false;
  @Output() redirectWeatherUrl = new EventEmitter();
  isLoading = true;
  noRecords: boolean = false;
  constructor() { }

  ngOnInit() {
    if(this.weathers.length) {
      this.noRecords = true; 
    }
    this.isLoading = false;
  }

  goToWeatherDetails(id) {
    this.redirectWeatherUrl.emit(id);
  }

}
