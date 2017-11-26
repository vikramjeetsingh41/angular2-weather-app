import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Injectable()
export class WeatherService {

  constructor(private http: Http) { }
  
    searchWeather(cityName: string): Observable<any> {
      return this.http.get("http://localhost/weatherapi/weather.php?command=search&keyword="+cityName)
        .map(this.extractData)
        .catch(this.handleError);
    }

    getLocationData(woeid: number): Observable<any> {
      return this.http.get("http://localhost/weatherapi/weather.php?command=location&woeid="+woeid)
        .map(this.extractData)
        .catch(this.handleError);
    }

    private extractData(res: Response) {
      let body = res.json();
      return body || {};
    }
    private handleError(error: Response | any) {
      // In a real world app, you might use a remote logging infrastructure
      let errMsg: string;
      if (error.status === 401){
        return Observable.throw(error);
      }
      if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      return Observable.throw(errMsg);
    }

}