import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { IUser } from 'src/app/IUser';
import { ApiService } from 'src/app/services/session-login/api.service';
import { User } from 'src/app/formMember/ajout-user/user';
import { AbstractControl, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private apiService: ApiService, private formBuilder: FormBuilder, private router: Router) {}

  form!: FormGroup;



  ngOnInit(): void {
    this.form = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      sexe : new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      birthdate: new FormControl('', Validators.required),
      address: new FormControl,
      password: new FormControl('', Validators.required),
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    this.apiService.createUser(this.form.value).subscribe((res:any) => {
         console.log('user created successfully!');
         this.router.navigateByUrl('liste-membres');
    })

  }
}

