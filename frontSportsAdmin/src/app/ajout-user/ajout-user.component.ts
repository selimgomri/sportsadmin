import { Component, OnInit } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-ajout-user',
  templateUrl: './ajout-user.component.html',
  styleUrls: ['./ajout-user.component.scss']
})
export class AjoutUserComponent implements OnInit {
  model : User = new User();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.model);
  }
}
