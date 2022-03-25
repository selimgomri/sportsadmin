import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-profile-view',
  templateUrl: './create-profile-view.component.html',
  styleUrls: ['./create-profile-view.component.scss']
})
export class CreateProfileViewComponent implements OnInit {

  title: string = 'Créer mon profil';
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
