import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url:string="http://localhost:3000/countries";
  url2:string="http://localhost:3000/states";
  url3:string="http://localhost:3000/cities";
  constructor(private _http:HttpClient) { }

  getCountry(){
   return this._http.get(this.url);
  }

  getState(obj){
    return this._http.get(`${this.url2}/?country_id=${obj}`);
  }

  getCity(obj2){
    return this._http.get(`${this.url3}/?state_id=${obj2}`);
  }


}
