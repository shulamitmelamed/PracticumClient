import { Component, OnInit } from '@angular/core';
import Name from '../models/Name';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.scss']
})
export class FatherComponent implements OnInit {

  constructor() { }
  empty: Name[] = [new Name("", "")]
  onWriting(data: Name) {
    this.empty[0] = data
  }
  ngOnInit(): void {
  }

}
