import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/IUser';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() user!: IUser;
  id!: number;
  form!: FormGroup;

  constructor(
    private sessionLoginService: SessionLoginService,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    console.log(this.user);
    this.sessionLoginService.me().subscribe((data) => {
      this.user = data;
      this.id = this.user.id;
    });

    // this.id = this.route.snapshot.params['id'];
    /*this.apiService.find(this.id).subscribe((data: IUser)=>{
      this.user = data;
    });*/

    this.form = new FormGroup({
      photo: new FormControl('', [Validators.required]),
      //roles: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.profileService
      .updateProfile(this.id, this.form.value)
      .subscribe((res: any) => {
        console.log('Profile updated successfully!');
        this.user = this.form.value;
      });
  }
}
