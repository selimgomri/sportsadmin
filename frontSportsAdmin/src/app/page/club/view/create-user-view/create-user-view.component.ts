import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-user-view',
  templateUrl: './create-user-view.component.html',
  styleUrls: ['./create-user-view.component.scss']
})
export class CreateUserViewComponent implements OnInit {

  title: string = 'Créer membre';
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
