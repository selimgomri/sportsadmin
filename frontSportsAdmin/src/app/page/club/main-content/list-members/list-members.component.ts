import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})

export class ListMembersComponent implements OnInit {

  usersNumber!: number;
  licensedNumber!: number;
  unlicensedNumber!: number;

  constructor() {}

  ngOnInit(): void {}

  getUsersLength(users:number) {
    this.usersNumber = users;
  }
  getLicensedLength(users:number) {
    this.licensedNumber = users;
  }
  getUnlicensedLength(users:number) {
    this.unlicensedNumber = users;
  }
}
