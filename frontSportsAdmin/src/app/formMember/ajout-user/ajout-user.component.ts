import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  model : User = new User();
  levelUser = [
    'Pro',
    'Amateur',
  ];

  sexeUser = [
    '',
    'Masculin',
    'Feminin',
  ];



  constructor() { }

  ngOnInit(): void {
  }

  submitted =false;
  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }
}
