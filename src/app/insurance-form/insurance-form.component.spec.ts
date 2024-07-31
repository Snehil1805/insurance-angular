import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceFormComponent } from './insurance-form.component';

describe('InsuranceFormComponent', () => {
  let component: InsuranceFormComponent;
  let fixture: ComponentFixture<InsuranceFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsuranceFormComponent]
    });
    fixture = TestBed.createComponent(InsuranceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
