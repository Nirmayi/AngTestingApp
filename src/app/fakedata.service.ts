import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import {Post} from '../app/models/posts.models'
import { Users } from './models/user.model'

@Injectable({
  providedIn: 'root'
})
export class FakedataService {

  //Inject HttpClient obj
  constructor(private hc:HttpClient) { }

  getPosts():Observable<Post[]>{
    return this.hc.get<Post[]>('https://jsonplaceholder.typicode.com/users')
  }

  getUsers():Observable<any>{
    return this.hc.get<any>('http://localhost:3000/women_of_industry');
 }


 getUsersById(id):Observable<Users[]>{
    return this.hc.get<Users[]>('http://localhost:3000/women_of_industry/'+id);
 }
}