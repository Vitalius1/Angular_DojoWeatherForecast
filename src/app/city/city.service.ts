import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { toPromise } from 'rxjs/operator/toPromise';

@Injectable()
export class CityService {
  city;
  constructor(private _http: Http) { }

  retrieveCity(city, callback){
    console.log("========", city);
    this._http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=d138a1bcc0c3be8bfe632252d85bb95d`).subscribe(
      (response) => {
        this.city = response.json()
        callback(this.city);
      },
      (err) => {
        console.log("8****************");
      }
    )
  }
  
}
