import { Component, Input, OnInit} from '@angular/core';
import { IUser } from 'src/app/IUser';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})

export class ListMembersComponent implements OnInit {

  usersNumber!: number;
  licensedUsers!: IUser[];
  unlicensedUsers!: IUser[];

  constructor(private apiService: UsersService) {}

  ngOnInit(): void {}

  getUsersLength(users:number) {
    this.usersNumber = users;
  }
}
