import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsuranceListComponent } from './insurance-list/insurance-list.component';
import { InsuranceDetailsComponent } from './insurance-details/insurance-details.component';
import { InsuranceFormComponent } from './insurance-form/insurance-form.component';

const routes: Routes = [
  { path: 'insurance-list', component: InsuranceListComponent },
  { path: 'insurance-details/:id', component: InsuranceDetailsComponent },
  { path: 'insurance-form', component: InsuranceFormComponent },
  { path: '', redirectTo: '/insurance-list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
