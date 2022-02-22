import { Component } from '@angular/core';
import { ApiService } from '../services/session-login/api.service';
import { IUser } from '../IUser';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  users!: [IUser];
  page = 1;
  pageSize = 4;
  
  constructor(private apiService: ApiService) {};

  ngOnInit(): void {
    this.apiService.getUsers().subscribe((datas: any) => {
      this.users = datas['hydra:member'];
      console.log(this.users);
    });
  }
}
