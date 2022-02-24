import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/formMember/ajout-user/user';
import { IUser } from 'src/app/IUser';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  model : User = new User();
  user?: IUser;

  constructor(private sessionLoginService: SessionLoginService) { }

  ngOnInit(): void {
    this.sessionLoginService.userProfile.subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });
  }

  onSubmit() {
    console.log(this.model);
  }

}
