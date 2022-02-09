import { Component, OnInit } from '@angular/core';
import { Edit } from './Edit';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent implements OnInit {

  model : Edit = new Edit();

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

  primaryColor!: string;
  secondaryColor!: string;

  constructor() {
    this.changeTheme('#F6F4F5', '#4ac285'); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

}
