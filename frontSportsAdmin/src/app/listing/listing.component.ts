import { Component } from '@angular/core';
import { ApiService } from '../services/session-login/api.service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss']
})
export class ListingComponent {
  users: any[] = [];

  constructor(private apiService: ApiService) { }

  async fetchAllMembers() {
    this.users = await this.apiService.fetchMemberList();
  }

}
