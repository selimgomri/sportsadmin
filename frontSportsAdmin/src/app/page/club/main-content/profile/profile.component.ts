import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/formMember/ajout-user/user';
import { IUser } from 'src/app/IUser';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { ApiService } from 'src/app/services/session-login/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  //model : User = new User();
  id!: number;
  user?: IUser;
  form!: FormGroup;

  constructor(private sessionLoginService: SessionLoginService, private apiService: ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sessionLoginService.userProfile.subscribe((data) => {
      this.user = data;
      console.log(this.user);
    });

    this.id = this.route.snapshot.params['postId'];
    this.apiService.find(this.id).subscribe((data: IUser)=>{
      this.user = data;
    });

    this.form = new FormGroup({
      photo: new FormControl('', [Validators.required]),
      roles: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      birthdate: new FormControl('', [Validators.required]),
      adress: new FormControl('', [Validators.required]),
      firstname: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      sexe: new FormControl('', [Validators.required]),

    });
  }

  get f(){
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.apiService.updateProfile(this.id, this.form.value).subscribe((res:any) => {
         console.log('Profile updated successfully!');
         this.router.navigateByUrl('mon-profil');
        })
      }
}
