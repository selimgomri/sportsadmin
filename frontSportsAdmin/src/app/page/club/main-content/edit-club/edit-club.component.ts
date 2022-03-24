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

  constructor(private http: HttpClient, private router: Router,
    private clubService: ClubService,
    private ActivatedRoute: ActivatedRoute) {
    this.changeTheme(this.primarycolor, this.secondarycolor); // Set default theme
    //recup de l'id du club dans l'url
    this.ActivatedRoute.queryParams.subscribe((params: Params) => {
      this.clubId = params;
    });
  }

  ngOnInit(): void {
    //recup des donnée du club par l'id
    this.clubService.getClub(this.clubId['id']).subscribe((datas: any) => {
      this.club = datas;
    });

    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required]),
      primarycolor: new FormControl('', [Validators.required]),
      secondarycolor: new FormControl('', [Validators.required]),
    });
  }

  /* get f() {
    return this.form.controls;
  }

  onSubmit() {
    console.log({
      file: this.file,
    });

    //faire un httpPost à la place du console.log afin d'envoyer au server back
  } */

  setColor1(newColor: string) {
    console.log('value', newColor);
    this.primarycolor = newColor;
  }

  setColor2(newColor: string) {
    console.log('value', newColor);
    this.secondarycolor = newColor;
  }

  primarycolor = '#F6F4F5';
  secondarycolor = '#4AC285';

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
  }

  /* onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;

      console.log(file);

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post('/api/me', formData);

      upload$.subscribe();
    }
  }
  */

  submit() {
    this.clubService
      .updateClub(this.club.id, this.form.value)
      .subscribe((res: any) => {
        console.log('club updated successfully!');
      });
  }
}
