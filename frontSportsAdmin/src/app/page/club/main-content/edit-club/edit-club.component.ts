import { Component, Input, OnInit } from '@angular/core';
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
  //model: Edit = new Edit();
  @Input() club!: Club;
  file: File | undefined;
  form!: FormGroup;
  id!: number;

  constructor(private http: HttpClient, private clubService: ClubService) {
    this.changeTheme(this.primarycolor, this.secondarycolor); // Set default theme
  }

  ngOnInit(): void {
    this.clubService.getClub(5).subscribe((datas: any) => {
      console.log(datas);
      this.club = datas;
      console.log(this.club);
      //this.id = this.club.id;
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
    console.log(this.form.value);
    this.clubService
      .updateClub(this.club.id, this.form.value)
      .subscribe((res: any) => {
        console.log('club updated successfully!');
      });
  }
}
