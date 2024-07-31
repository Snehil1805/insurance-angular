import { Component, OnInit } from '@angular/core';
import { Observable, map, of, toArray } from 'rxjs';
import { Insurance } from '../models/insurance';
import { InsurenceService } from '../services/insurance.service';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css'],
})
export class InsuranceListComponent implements OnInit {
  filteredInsurance$: Observable<Insurance[]> = of([]);
  insurance$: Observable<Insurance[]> = of([]);

  constructor(private insurance: InsurenceService) {}

  ngOnInit(): void {
    this.getInsurances();
  }

  getInsurances() {
    this.insurance$ = this.insurance.getInsurances();
    this.filteredInsurance$ = this.insurance$;
    if (this.filteredInsurance$) {
      this.filteredInsurance$.pipe(toArray());
      let insuranceArray;
      this.filteredInsurance$.subscribe((insu) => {
        insuranceArray = insu;
        if (insuranceArray) {
          const Array = JSON.stringify(insuranceArray);
          localStorage.setItem('InsuranceData', Array);
        }
      });
    }
  }

  searchInsurance(event: any) {
    const searchTerm = event.target.value.trim();
    if (!searchTerm) {
      this.filteredInsurance$ = this.insurance$;
      return;
    }
    this.filteredInsurance$ = this.insurance$.pipe(
      map((events) => {
        return events.filter((event) =>
          event.policyNumber.toString().includes(searchTerm)
        );
      })
    );
  }
}
