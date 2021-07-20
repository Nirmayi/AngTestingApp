import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FakedataService } from '../fakedata.service';
import { Users } from '../models/user.model';

@Component({
  selector: 'app-user',
  templateUrl:'./users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  myUsers:any=[];
  constructor(private dsObj:FakedataService,private router:Router) { }
  ngOnInit(): void {
    this.dsObj.getUsers().subscribe(
      usersData => {
        this.myUsers=usersData;
      },
      err => {
        console.log("error is ",err)
      }
    )
  }
  onSelected(id:string){
    this.router.navigateByUrl('users/'+id);
  }
}
