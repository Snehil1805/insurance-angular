import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceDetailsComponent } from './insurance-details.component';

describe('InsuranceDetailsComponent', () => {
  let component: InsuranceDetailsComponent;
  let fixture: ComponentFixture<InsuranceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceDetailsComponent]
    });
    fixture = TestBed.createComponent(InsuranceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
