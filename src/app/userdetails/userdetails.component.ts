import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Post } from '../models/posts.models';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  userDetails:any=[];
  constructor(private ar:ActivatedRoute,private dsObj:FakedataService) { }
  ngOnInit(): void {

    //get id from the url
    let i=this.ar.snapshot.params.id;

    //get data of post with that id
    this.dsObj.getUsersById(i).subscribe(
      usersData => {
        this.userDetails=usersData;
      },
      err => {
        console.log("error is ",err)
      }
    )
    
  }
}