import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/session-login/api.service';
import { IUser } from 'src/app/IUser';

@Component({
  selector: 'app-oubli-password',
  templateUrl: './oubli-password.component.html',
  styleUrls: ['./oubli-password.component.scss']
})
export class OubliPasswordComponent implements OnInit {

  users: IUser[] = [];
  sortedUsers = this.users;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((datas: any) => {
      this.users = datas['hydra:member'];
      this.sortedUsers = this.users;
    });
  }

}
