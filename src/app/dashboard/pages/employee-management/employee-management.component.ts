import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user-models';
import { AuthService } from 'src/app/core/services/auth.service';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeModalComponent } from './employee-modal/employee-modal.component';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss'],
})
export class EmployeeManagementComponent implements OnInit {
  users: Array<User> = [];
  sex!: Array<any>;
  role!:Array<any>;
  status!: Array<any>;
  department: any;
  form!: FormGroup;
  isSearchValue = false;



  ngOnInit(): void {
    this.initForm();
    this.getGenderData();
    this.getRoleData();
    this.getStatus();
    this.getDepartment();
    this.search();
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private modalService: NgbModal,
    private departmentService: DepartmentService
  ) // private toastService: ToastrService
  {}

  initForm() {
    this.form = this.fb.group({
      userId: [''], // Khai báo các trường tương ứng với form
      name: [''],
    });
  }
  get f() {
    return this.form.controls;
  }

  search() {
    const json = {...this.form.value};
    this.authService.get(json).subscribe((res) => {
      if (res.data !== null) {
        this.users = res.data;

      }
    });

  }
  onReset(){
    this.form.reset();
    this.search();
  }

  getGenderData() {
    this.authService.getGenderData({}).subscribe((res) => {
      if (res.data !== null) {
        this.sex = res.data;

      }
    });
  }
  getRoleData() {
    this.authService.getRoleData({}).subscribe((res) => {
      if (res.data !== null) {
        this.role = res.data;

      }
    });
  }
  getStatus(){
    this.authService.getStatus({}).subscribe((res) => {
      if (res.data !== null) {
        this.status = res.data;

      }
    });
  }
  getDepartment(){
    this.departmentService.getAllDepartment({}).subscribe((res) =>{
      if(res.data !== null){
        this.department = res.data
      }
    })
  }

  openModal(item: any, type: string) {
    const modalRef = this.modalService.open(EmployeeModalComponent, {
      centered: true,
      size: 'xl',
      backdrop: 'static'
      
    });
    modalRef.componentInstance.item = item;
    console.log(item);
    
    modalRef.componentInstance.type = type;    
    modalRef.componentInstance.sex = this.sex;
    modalRef.componentInstance.role = this.role;
    modalRef.componentInstance.status = this.status;
    modalRef.componentInstance.department = this.department;
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.modalService.dismissAll();
    });

  }
}
