import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'edit-club-view',
  templateUrl: './edit-club-view.component.html',
  styleUrls: ['./edit-club-view.component.scss'],
})
export class EditClubViewComponent implements OnInit {
  title: string = 'Éditer mon Club';
  val!: string;
  constructor(private route: Router) {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {}
}
