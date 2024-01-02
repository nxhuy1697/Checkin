import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ExampleComponent } from './pages/example/example.component';



const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'employee-management', pathMatch: 'full' },
      { path: 'employee-management', component: EmployeeManagementComponent},
      { path: 'checkin', component: CheckinComponent},
      { path: 'department', component: DepartmentComponent},
      {path: 'example', component: ExampleComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
