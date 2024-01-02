import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { EmployeeManagementComponent } from './pages/employee-management/employee-management.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeModalComponent } from './pages/employee-management/employee-modal/employee-modal.component';
import { CheckinComponent } from './pages/checkin/checkin.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DepartmentComponent } from './pages/department/department.component';
import { DepModalComponent } from './pages/department/dep-modal/dep-modal.component';
import { ExampleComponent } from './pages/example/example.component';

@NgModule({
  declarations: [
    DashboardComponent,
    EmployeeManagementComponent,
    EmployeeModalComponent,
    CheckinComponent,
    DepartmentComponent,
    DepModalComponent,
    ExampleComponent,

  ],
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
})
export class DashboardModule {}
