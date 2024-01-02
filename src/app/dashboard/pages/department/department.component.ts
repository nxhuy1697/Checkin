import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DepartmentService } from 'src/app/core/services/department.service';
import { DepModalComponent } from './dep-modal/dep-modal.component';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  searchFrom: any;
  department: any;
  branch: any;
  listDepartment: any;
  isSearchValue = false;
  
  constructor(
    private fb: FormBuilder,
    private departmentService: DepartmentService,
    private modalService: NgbModal
    ){}

  
  ngOnInit(): void {
    this.initForm();
    this.search();
  }
  initForm(){
    this.searchFrom = this.fb.group({
      departmentName: [''],
      branch :['']
    })
  }
  get f(){
    return this.searchFrom.controls
  }
  search(){
    const json = {
      departmentName : this.searchFrom.get('departmentName')?.value,
      branch: this.searchFrom.get('branch')?.value
    };
    this.departmentService.getAllDepartment(json).subscribe((res) => {
      if(res.data !== null){
        this.listDepartment = res.data;
      }
    })
  }
  onReset(){
    this.searchFrom.reset();
    this.search();
  }
  openModal(item: any, type: string) {
    const modalRef = this.modalService.open(DepModalComponent, {
      centered: true,
      size: 'xl',
      backdrop: 'static'
      
    });
    modalRef.componentInstance.item = item;   
    modalRef.componentInstance.type = type;    
    modalRef.componentInstance.passEntry.subscribe((receivedEntry: any) => {
      this.modalService.dismissAll();
    });

  }

}
