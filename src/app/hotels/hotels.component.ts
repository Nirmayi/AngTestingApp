import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  hotel=[]

  searchTerm : any;

  constructor(private dsObj:DataService,private hc:HttpClient ) {
    this.searchTerm = '' ;
  }


  ngOnInit(){
    this.dsObj.getData().subscribe(
      data=>{
        this.hotel=data;
        console.log("data is extracted successfuly",typeof(this.hotel[0]),this.hotel[0]);
      },
      err=>{
        console.log("error while loading hotels data is :",err);
      }
    )
  }

}
