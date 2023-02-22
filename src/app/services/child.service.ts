import { Injectable } from '@angular/core';
import Child from '../models/Child';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ChildService {

  constructor( public userSer: UserService) { }
  currChild: Child = new Child(0, "", "", "", new Date())
  // GetAllUsers() {
  //   return this.http.get<Child[]>('https://localhost:7092/api/Children')
  // }
  pushChild() {
    this.userSer.myUser.Childrens.push(this.currChild)
    this.currChild = new Child(0, "", "", "", new Date())
  }

}
