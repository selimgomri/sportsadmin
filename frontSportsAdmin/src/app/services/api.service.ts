import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  apiUrl = `${environment.baseUrl}/api`;

  fetchsubscription(): Observable<any[]> {
    return this.httpClient
      .get<{ [key: string]: any }>(`${this.apiUrl}/subscriptions`)
      .pipe(
        map((responseData) => {
          if (!responseData) return [];
          return Object.entries(responseData).map(([id, apiPokemon]) => {
            return <any>{
              ...apiPokemon,
              id,
            };
          });
        })
      );
  }

  getMemberList(): Observable<any> {
    return this.httpClient.get(this.apiUrl);
  }
}
