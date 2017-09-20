import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CityService } from './city.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city;
  constructor(private _route: ActivatedRoute, private _cityService: CityService) {
    this._route.paramMap
      .subscribe((params) => {
        console.log("City Weather loaded for: ", params.get('city'));
        return this._cityService.retrieveCity(params.get('city'), city => {
          this.city = city;
          console.log(this.city)
        });
      })
  }

  ngOnInit() {
  }

}
