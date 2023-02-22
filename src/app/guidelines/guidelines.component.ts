import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Name from '../models/Name';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-guidelines',
  templateUrl: './guidelines.component.html',
  styleUrls: ['./guidelines.component.scss']
})
export class GuidelinesComponent implements OnInit {

  constructor(public router: Router,public userSer:UserService) { }
  @Input() myName: Name = new Name("", "")
  ngOnInit(): void {
  }
  nav() {
    this.router.navigate(['login'])
  }
  checkName() {
    return this.myName.firstName != "" && this.myName.firstName != ""
  }

}
