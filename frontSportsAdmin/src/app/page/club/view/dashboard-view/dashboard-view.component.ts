import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard-view',
  templateUrl: './dashboard-view.component.html',
  styleUrls: ['./dashboard-view.component.scss'],
})
export class DashboardViewComponent implements OnInit {
  title: string = 'Tableau de bord';
  val!: string;
  constructor(private route: Router) {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {}
}
