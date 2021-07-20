import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private hc:HttpClient) { }

  getData():Observable<any>{

    return this.hc.get( 'https://hotels4.p.rapidapi.com/properties/get-details',{
      "headers":{
        'x-rapidapi-key': '1610e021aemsha8d4f851ec5e0a0p14420cjsnfdedd5c2427f',
    'x-rapidapi-host': 'hotels4.p.rapidapi.com'
      }
    })
    
  }


}