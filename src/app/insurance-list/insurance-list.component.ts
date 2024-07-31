import { Component, OnInit } from '@angular/core';
import { Observable, map, of, toArray } from 'rxjs';
import { Insurance } from '../models/insurance';
import { InsuranceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css'],
})
export class InsuranceListComponent implements OnInit {
  insurances$: Observable<Insurance[]> = of([]);
  filteredInsurances$: Observable<Insurance[]> = of([]);

  constructor(private insuranceService: InsuranceService) {}

  ngOnInit(): void {
    this.getInsurances();
  }

  getInsurances() {
    this.insurances$ = this.insuranceService.getInsurances();
    this.filteredInsurances$ = this.insurances$;

    this.filteredInsurances$.subscribe((insuranceArray) => {
      if (insuranceArray) {
        localStorage.setItem('InsuranceData', JSON.stringify(insuranceArray));
      }
    });
  }

  searchInsurance(event: any) {
    const searchTerm = event.target.value.trim();
    if (!searchTerm) {
      this.filteredInsurances$ = this.insurances$;
    } else {
      this.filteredInsurances$ = this.insurances$.pipe(
        map((insuranceArray) => {
          return insuranceArray.filter((insurance) => {
            return insurance.policyNumber.toString().includes(searchTerm);
          });
        })
      );
    }
  }
}
