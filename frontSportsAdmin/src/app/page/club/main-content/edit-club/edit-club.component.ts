import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Club } from 'src/app/club';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss'],
})
export class EditClubComponent implements OnInit {
  club!: Club;
  clubId!: any;
  file: File | undefined;
  form!: FormGroup;
  id!: number;
  primarycolor!: string;
  secondarycolor!: string;

  /*   secondarycolor = '#4AC285';
   */
  constructor(
    private router: Router,
    private clubService: ClubService,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.changeTheme(this.primarycolor, this.secondarycolor); // Set default theme
    //recup de l'id du club dans l'url
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params.id;
    });
    //recup des donnée du club par l'id
    console.log('CLUBID', this.clubId);
    this.clubService.getClub(this.clubId).subscribe((datas: any) => {
      this.club = datas;
      if (this.club.primarycolor) {
        this.primarycolor = this.club.primarycolor;
      } else {
        this.primarycolor = '#F6F4F5';
      }
      if (this.club.secondarycolor) {
        this.secondarycolor = this.club.secondarycolor;
      } else {
        this.secondarycolor = '#4AC285';
      }
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      primarycolor: new FormControl('', [Validators.required]),
      secondarycolor: new FormControl('', [Validators.required]),
    });
  }

  setColor1(newColor: string) {
    console.log('value', newColor);
    this.primarycolor = newColor;
  }

  setColor2(newColor: string) {
    console.log('value', newColor);
    this.secondarycolor = newColor;
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

  submit() {
    this.clubService
      .updateClub(this.clubId, this.form.value)
      .subscribe((res: any) => {
        console.log('club updated successfully!');
        this.router.navigate(['./dashboard'], {
          //mise en place du parametre id d'un club
          queryParams: { id: this.clubId },
        });
      });
  }
}
