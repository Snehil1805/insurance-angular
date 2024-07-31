import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Insurance } from '../models/insurance';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  private apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getInsurances(): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(`${this.apiUrl}/insurance`);
  }

  getInsurance(id: any): Observable<Insurance[]> {
    return this.http.get<Insurance[]>(`${this.apiUrl}/insurance/${id}`).pipe(
      map((data: any) => {
        if (Array.isArray(data)) {
          return data;
        } else {
          return [data];
        }
      })
    );
  }

  addInsurance(insurance: Insurance): Observable<Insurance> {
    return this.http.post<Insurance>(`${this.apiUrl}/insurance`, insurance);
  }
}
