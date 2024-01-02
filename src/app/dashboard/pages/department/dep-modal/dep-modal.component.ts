import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { DepartmentService } from 'src/app/core/services/department.service';

@Component({
  selector: 'app-dep-modal',
  templateUrl: './dep-modal.component.html',
  styleUrls: ['./dep-modal.component.scss']
})
export class DepModalComponent implements OnInit {
  depForm: any;
  isSubmit: boolean = false;
  listDepartment: any;
  @Input () item :any;
  @Input () department : Array<any> = [];
  @Output() passEntry: EventEmitter<any> = new EventEmitter();
  ngOnInit(): void {
this.initForm();
this.listDepartment = this.department;
this.depForm.patchValue(this.item)
  }

  constructor(
    public depService: DepartmentService,
    public fb: FormBuilder,
    private toastService: ToastrService,
    public activeModal: NgbActiveModal
    ){}
  initForm(){
    this.depForm = this.fb.group({
      id: [''],
      departmentName: [''],
      branch: [''],
      note: ['']
    })

  }
  get f() {
    return this.depForm.controls;
  }
  submit() {
    this.isSubmit = true;
    if (this.depForm.invalid) {
      this.toastService.warning(
        "Vui lòng nhập đầy đủ các thông tin bắt buộc",
        "Thông báo"
      );
      return;
    }
    const payload = this.depForm.getRawValue(); 
    if (this.item) {
      this.create(payload);

    } 
    this.closeModal;
  }
  create(user: any) {


    this.depService.create(user).subscribe(
      (res) => {
        if (res.errorCode === "OK") {
          this.toastService.success(res.errorDesc, "Thông báo");
          this.passEntry.emit();
        } else {
          this.toastService.error(res.errorDesc, "Thông báo");
        }
      },
      (err) => {
        this.toastService.error(err, "Thông báo");
      }
    );
  }
  closeModal() {
    this.activeModal.dismiss();
  }

}
