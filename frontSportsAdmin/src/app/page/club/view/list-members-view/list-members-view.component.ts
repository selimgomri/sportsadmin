import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-members-view',
  templateUrl: './list-members-view.component.html',
  styleUrls: ['./list-members-view.component.scss'],
})
export class ListMembersViewComponent implements OnInit {
  title: string = 'Liste des membres';
  val!: string;
  constructor(private route: Router) {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {}
}
