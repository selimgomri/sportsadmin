import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-club-view',
  templateUrl: './create-club-view.component.html',
  styleUrls: ['./create-club-view.component.scss']
})
export class CreateClubViewComponent implements OnInit {

  title: string = 'Créer mon Club';
  val!: string;

  constructor() {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {
  }

}
