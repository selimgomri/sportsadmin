import { Component, Input, OnInit} from '@angular/core';
import { IUser } from 'src/app/IUser';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  usersNumber!: number;
  constructor() { }

  ngOnInit(): void {
  }

  getUsersLength(users:number) {
    this.usersNumber = users;
  }
}
