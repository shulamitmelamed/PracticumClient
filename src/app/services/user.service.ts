import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  children:User[]=[]
myUser:User=new User(0,"","","",new Date(),0,0,this.children)
  GetAllUsers() {
    return this.http.get<User[]>('https://localhost:7092/api/PersonalDetails')
  }
  login(user: User) {
    return this.http.post<User>('https://localhost:7092/api/PersonalDetails', user)
  }
}
