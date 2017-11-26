import { Component, OnInit, trigger, state, style, transition, animate, HostBinding, OnDestroy } from '@angular/core';
import { MatSelectModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeWhile';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  searchStr = "";
  private cities = ['Istanbul', 'Berlin', 'London', 'Helsinki', 'Dublin', 'Vancouver'];
  constructor(private weatherService: WeatherService,
    private route: ActivatedRoute,
    private router: Router) {

  }

  // implement OnInit's `ngOnInit` method
  ngOnInit() {
    
  }

  search() {
    if (this.searchStr) {
      this.router.navigate(['/search', this.searchStr]);
    }
  }
  ngOnDestroy() {

  }
  
}
