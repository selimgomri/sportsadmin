import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionLoginService {
  constructor(private http: HttpClient) {}

  authentication(user: any) {
    return this.http.post('https://localhost:8000/authentication_token', user, {
      withCredentials: true,
    });
  }

  me() {
    return this.http.get<any>('https://localhost:8000/api/me', {
      withCredentials: true,
    });
  }
}
