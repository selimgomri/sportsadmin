import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router, Params  } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  clubId!: any;
  constructor(private apiService: UsersService, private formBuilder: FormBuilder, private router: Router, private ActivatedRoute: ActivatedRoute) {
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

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
      licenseNumber: new FormControl,
      password: new FormControl('', Validators.required),
    });

  }

  get f() {
    return this.form.controls;
  }

  submit() {
    this.apiService.createUser(this.form.value).subscribe((res:any) => {
         console.log('user created successfully!');
         this.router.navigate(['./liste-membres'], {
          //mise en place du parametre id d'un club
          queryParams: { id: this.clubId['id'] },
        });
    })

  }
}

