import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'club-choice',
  templateUrl: './club-choice.component.html',
  styleUrls: ['./club-choice.component.scss'],
})
export class ClubChoiceComponent implements OnInit {
  title: string = 'Mes clubs';
  val!: string;

  constructor(private route: Router) {
    this.val = '';
  }

  changedTitle(val: string) {
    this.title = val;
  }

  ngOnInit(): void {}
}
