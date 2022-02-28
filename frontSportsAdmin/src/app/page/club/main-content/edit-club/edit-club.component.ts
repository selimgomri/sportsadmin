import { Component, OnInit } from '@angular/core';
import { Edit } from './Edit';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/services/session-login/api.service';

@Component({
  selector: 'edit-club',
  templateUrl: './edit-club.component.html',
  styleUrls: ['./edit-club.component.scss'],
})
export class EditClubComponent implements OnInit {
  model: Edit = new Edit();
  file: File | undefined;
  club: any;

  ngOnInit(): void {

  }

  onSubmit() {
    console.log({
      ...this.model,
      file: this.file,
    });

    //faire un httpPost à la place du console.log afin d'envoyer au server back
  }

  setColor1(newColor: string) {
    console.log('value', newColor);
    this.primaryColor = newColor;
  }

  setColor2(newColor: string) {
    console.log('value', newColor);
    this.secondaryColor = newColor;
  }

  primaryColor = '#fafafa';
  secondaryColor = '#4AC285';

  constructor(private http: HttpClient, private apiService: ApiService) {
    this.changeTheme(this.primaryColor, this.secondaryColor); // Set default theme
  }

  changeTheme(primary: string, secondary: string) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--secondary-color', secondary);
    console.log('changetheme', primary);
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      /*
      console.log(file);

      const formData = new FormData();

      formData.append('thumbnail', file);

      const upload$ = this.http.post('/api/me', formData);

      upload$.subscribe(); */
    }
  }
}
