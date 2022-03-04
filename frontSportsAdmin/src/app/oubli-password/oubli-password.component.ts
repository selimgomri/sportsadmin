import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/session-login/api.service';
import { IUser } from 'src/app/IUser';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionLoginService } from 'src/app/services/session-login/session-login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-oubli-password',
  templateUrl: './oubli-password.component.html',
  styleUrls: ['./oubli-password.component.scss']
})
export class OubliPasswordComponent implements OnInit {

  users: IUser[] = [];
  user?: IUser;
  id!: number;
  sortedUsers = this.users;
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

    this.apiService.getUsers().subscribe((datas: any) => {
      this.users = datas['hydra:member'];
      this.sortedUsers = this.users;
    });

    this.form = new FormGroup({

      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),


    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() {
    console.log(this.form.value);
    this.apiService.updateProfile(this.id, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
        })
      }

}
