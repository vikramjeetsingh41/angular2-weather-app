import { Injectable } from '@angular/core'

@Injectable()
export class SharedDataService {
    public weatherStaticEndPoint = 'https://www.metaweather.com/static/img/weather/';
  public icons = [{
      "stateName": "Heavy Cloud",
      "abbr": "hc",
      "iconPath": "/static/img/weather/hc.svg"
  },{
    "stateName": "Clear",
    "abbr": "c  ",
    "iconPath": "/static/img/weather/c.svg"
},{
    "stateName": "Heavy Cloud",
    "abbr": "hc",
    "iconPath": "/static/img/weather/hc.svg"
},{
    "stateName": "Heavy Cloud",
    "abbr": "hc",
    "iconPath": "/static/img/weather/hc.svg"
},{
    "stateName": "Heavy Cloud",
    "abbr": "hc",
    "iconPath": "/static/img/weather/hc.svg"
},{
    "stateName": "Heavy Cloud",
    "abbr": "hc",
    "iconPath": "/static/img/weather/hc.svg"
}]
}
