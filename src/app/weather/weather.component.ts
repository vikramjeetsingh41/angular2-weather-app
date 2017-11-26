import { Component, Input, OnInit, trigger, state, style, transition, animate, HostBinding, OnDestroy } from '@angular/core';
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
  @Input() weatherData;
  @Input('parentData') incomingData: string;
  isLoading = true;
  constructor() { }

  ngOnInit() {
    console.log("======");
    console.log(this.weatherData);
    this.isLoading = false;
  }

}
