import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  users!: number;
  constructor() { }

  ngOnInit(): void {
  }

  getUsersLength(users:number) {
    console.log(users);
    this.users = users;
  }
}
