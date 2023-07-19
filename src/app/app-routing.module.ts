import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListingComponent } from './employee-listing/employee-listing.component';

const routes: Routes = [
  {path:'', redirectTo:'employee-listing', pathMatch:'full'},
  {component:EmployeeListingComponent, path:'employee-listing'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
