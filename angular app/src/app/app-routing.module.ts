import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  { path: "", redirectTo: "getEmployees", pathMatch: "full" },
  { path: "addEmployee", component: CreateEmployeeComponent },
  { path: "getEmployees", component: EmployeeListComponent },
  { path: "employee/:id", component: EmployeeDetailsComponent},
  { path: "updateEmployee/:id", component: UpdateEmployeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
