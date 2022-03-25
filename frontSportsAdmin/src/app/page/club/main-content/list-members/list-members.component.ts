import { Component, Input, OnInit} from '@angular/core';
import { IUser } from 'src/app/IUser';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute,  Params } from '@angular/router';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})

export class ListMembersComponent implements OnInit {

  usersNumber!: number;
  licensedUsers!: IUser[];
  licensedNumber!: number;
  unlicensedNumber!: number;
  unlicensedUsers!: IUser[];
  clubId!: any;

  constructor(private apiService: UsersService, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

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
