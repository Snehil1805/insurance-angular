import { Component, OnInit } from '@angular/core';
import { Observable, map, of, toArray } from 'rxjs';
import { Insurance } from '../models/insurance';
import { InsuranceService } from '../services/insurance.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.css'],
})
export class InsuranceDetailsComponent implements OnInit {
  insurance$: Observable<Insurance[]> = of([]);
  constructor(
    private insuranceService: InsuranceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      // Access parameters from the URL
      const id = params['id']; // Assuming your parameter is named 'id'
      this.getProfessor(id);
    });
  }
  getProfessor(id: any) {
    this.insurance$ = this.insuranceService.getInsurance(id.toString());
  }
}
