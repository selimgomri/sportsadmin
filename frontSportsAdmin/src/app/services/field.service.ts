import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Field } from '../formMember/form-modal/field';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FieldService {

  constructor(private http: HttpClient) { }

  getField(): Observable<Field> {
    return this.http.get<Field>(`${environment.baseUrl}/api/fields`, { withCredentials: true });
  }

  createField(data: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/api/fields`, data, { withCredentials: true });
  }

  deleteField(id: number): Observable<any> {
    return this.http.delete(`${environment.baseUrl}/api/fields/${id}`, { withCredentials: true });
  }

  updateField(id: number, data: Field): Observable<any> {
    return this.http
    .put(`${environment.baseUrl}/api/fields/${id}`, data, { withCredentials: true });
  }
}
