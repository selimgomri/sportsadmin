import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-create-club',
  templateUrl: './create-club.component.html',
  styleUrls: ['./create-club.component.scss']
})
export class CreateClubComponent implements OnInit {

  constructor(
    private apiService: ClubService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  form!: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      //logo: new FormControl('', [Validators.required, Validators.email]),
      primarycolor : new FormControl('', Validators.required),
      secondarycolor: new FormControl('', Validators.required),

    });
  }

  get f() {
    return this.form.controls;
  }

  setColor1(newColor: string) {
    this.primarycolor = newColor;
  }

  setColor2(newColor: string) {
    this.secondarycolor = newColor;
  }

  primarycolor = '#F6F4F5';
  secondarycolor = '#4AC285';

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

  submit() {
    console.log(this.form.value);
    this.apiService.createClub(this.form.value).subscribe((res:any) => {
         console.log('club created successfully!');
         this.router.navigateByUrl('mes-clubs');
    })
  }
}
