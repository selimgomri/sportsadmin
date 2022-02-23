import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'crud-subscription-view',
  templateUrl: './crud-subscription-view.component.html',
  styleUrls: ['./crud-subscription-view.component.scss']
})
export class CRUDSubscriptionViewComponent implements OnInit {

  title: string = 'Gestion des cotisations';
  val!: string;

  constructor(private route: Router) {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }


  ngOnInit(): void {
  }

}
