import { Component, OnInit } from '@angular/core';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { IUser } from 'src/app/IUser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  user?: IUser;

  constructor(private sessionLoginService: SessionLoginService) { }

  ngOnInit(): void {
    this.sessionLoginService.userProfile.subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

}
