import { Component, Input, OnInit} from '@angular/core';
import { IUser } from 'src/app/IUser';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-list-members',
  templateUrl: './list-members.component.html',
  styleUrls: ['./list-members.component.scss']
})
export class ListMembersComponent implements OnInit {

  @Input() user: any;
  usersNumber!: number;
  licensedUsers!: IUser;
  unlicensedUsers!: IUser;
  constructor(private apiService: UsersService) {}

  ngOnInit(): void {
    this.apiService.getUsersFiltered('e').subscribe((datas: any) => {
      this.licensedUsers = datas['hydra:member'].filter((user: any) => user.license_number != null);
      console.log('VOILA', this.licensedUsers);
    });
    this.apiService.getUsersFiltered('e').subscribe((datas: any) => {
      this.unlicensedUsers = datas['hydra:member'].filter((user: any) => user.license_number == null);
      console.log('PAS DE LICENCE', this.unlicensedUsers);
    });
  }

  getUsersLength(users:number) {
    this.usersNumber = users;
  }
}
