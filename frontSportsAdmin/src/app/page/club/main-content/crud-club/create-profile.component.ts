import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-profile',
  templateUrl: './create-profile.component.html',
  styleUrls: ['./create-profile.component.scss']
})
export class CreateProfileComponent implements OnInit {

  constructor(private apiService: UsersService, private formBuilder: FormBuilder, private router: Router) {}

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
         this.router.navigateByUrl('creer-mon-club');
    })

  }
}

