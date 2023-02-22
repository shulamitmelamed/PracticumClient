import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FloatLabelType } from '@angular/material/form-field';
import { Router } from '@angular/router';
import Child from '../models/Child';
import Name from '../models/Name';
import User from '../models/User';
import { ChildService } from '../services/child.service';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private _formBuilder: FormBuilder,
    public router: Router,
    public userSer: UserService,
    public childSer: ChildService) { }
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto' as FloatLabelType);

  options = this._formBuilder.group({
    hideRequired: this.hideRequiredControl,
    floatLabel: this.floatLabelControl,
  });
  children: Child[] = []
  myChild: Child = new Child(0, "", "", "", new Date())
  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  idFormControl = new FormControl('', [Validators.required, Validators.minLength(3)])
  myName: Name = new Name("", "")
  @Output() writeName = new EventEmitter<Name>();
  onWritingName() {
    this.writeName.emit(this.myName)
  }
  isAddChild:boolean
  saveChild(fname, idnum, dateb) {
    this.childSer.currChild.FirstName = fname
    this.childSer.currChild.LastName = this.userSer.myUser.LastName
    this.childSer.currChild.IdNumber = idnum
    this.childSer.currChild.DateOfBirth = dateb
    this.childSer.pushChild()
    console.log(this.userSer.myUser)
  }
  nav() {
    this.router.navigate(['guidelines'])
  }
  send() {
    // this.myUser.DateOfBirth=this.myUser.DateOfBirth.toISOString()
    this.userSer.login(this.userSer.myUser).subscribe((succ) => {
      if (!succ) {
        alert("אירעה שגיאה בשליחת הנתונים")
      }
      else
        alert("The data was received successfully!!!")
    })
    this.children=[]
    this.userSer.myUser = new User(0, "", "", "", new Date(), 0, 0, this.children)
  }
  getFloatLabelValue(): FloatLabelType {
    return this.floatLabelControl.value || 'auto';
  }
  downloadToExel(){
    
  }
}
