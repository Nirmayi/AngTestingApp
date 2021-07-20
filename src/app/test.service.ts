import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  data:any;

  //to handover the data to other
  getData()
  {
    return this.data;
  }



  //to recieve data from other
  setData(value)
  {
    this.data=value;

  }
}
