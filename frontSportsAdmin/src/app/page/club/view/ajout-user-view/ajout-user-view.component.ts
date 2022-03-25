import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout-user-view',
  templateUrl: './ajout-user-view.component.html',
  styleUrls: ['./ajout-user-view.component.scss'],
})
export class AjoutUserViewComponent implements OnInit {
  title: string = 'ÉDITER FICHE MEMBRES';
  val!: string;
  constructor() {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {}
}
