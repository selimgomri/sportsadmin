import { Component, Input, OnInit, Output } from '@angular/core';
import { Data } from '@angular/router';
import { IUser } from 'src/app/IUser';
import { ListingComponent } from 'src/app/listing/listing.component';
import { updateLanguageServiceSourceFile, UserPreferences } from 'typescript';

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
