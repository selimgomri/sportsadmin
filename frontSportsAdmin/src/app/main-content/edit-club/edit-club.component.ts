import { Component, OnInit } from '@angular/core';
import { Edit } from './Edit';

@Component({
  selector: 'edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss']
})
export class EditClubComponent implements OnInit {

  model : Edit = new Edit();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }

}
