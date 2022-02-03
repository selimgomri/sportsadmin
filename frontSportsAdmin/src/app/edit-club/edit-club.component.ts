import { Component, OnInit } from '@angular/core';
import { Edit } from './Edit';


@Component({
  selector: 'app-edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent implements OnInit {

  model : Edit = new Edit();
  public primaryColor = '#ffffff';
  public secondaryColor = '#4ac285';
  constructor() { }

  ngOnInit(): void {}

  onSubmit() {
    console.log(this.model);
  }

  setColor1(newColor:string) {
    console.log('value', newColor);
    this.primaryColor = newColor;
  }

  setColor2(newColor:string) {
    console.log('value', newColor);
    this.secondaryColor = newColor;
  }

}
