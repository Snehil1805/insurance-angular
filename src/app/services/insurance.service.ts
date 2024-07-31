import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Insurance } from '../models/insurance';

@Injectable({
  providedIn: 'root',
})
export class InsuranceService {
  private apiUrl = `http://localhost:3000`;

  constructor(private http: HttpClient) {}

  getInsurances(): Observable<any> {
    return this.http.get(`${this.apiUrl}/insurance`);
  }

  getInsurance(id: any): Observable<any[]> {
    return this.http.get(`${this.apiUrl}/insurance/${id}`).pipe(
      map((data: any) => {
        // If the response is an array, return it as is
        if (Array.isArray(data)) {
          return data;
        } else {
          // If the response is a single object, wrap it in an array
          return [data];
        }
      })
    );
  }

  addInsurance(insurance: Insurance): Observable<any> {
    return this.http.post(`${this.apiUrl}/insurance`, insurance);
  }
}
