import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-employee-modal',
  templateUrl: './employee-modal.component.html',
  styleUrls: ['./employee-modal.component.scss']
})
export class EmployeeModalComponent implements OnInit {
 
  regForm: any;
  isSubmit: boolean = false;
  listSex : any;
  listRole: any;
  listStatus: any;
  listDepartment: any;
  @Input () status:  Array<any> = [];
  @Input () item :any;
  @Input () sex : Array<any> = [];
  @Input () department : Array<any> = [];
  @Input() type: any;
  @Input () role : Array<any> = [];
  @Output() passEntry: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
    this.initForm();
    this.listSex = this.sex;
    this.listRole = this.role;
    this.listStatus = this.status;
    this.listDepartment = this.department;
   if(this.item ){
    this.regForm.patchValue(this.item);
    console.log(this.item)
    
   }
  }
  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    private authService: AuthService,
    private toastService: ToastrService
  ) {}
  initForm() {
    this.regForm = this.fb.group({
      userId:   [ {
        value: this.item?.userId,
        disabled: this.type === 'edit' || this.type === 'add',
      },
      ],
      name: ['', [Validators.required]],
      account: [{
        value: this.item?.account,
        disabled: this.type === 'edit' 
      }, [Validators.required]],
      passwords: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      country: ['', [Validators.required]],
      roleId: ['', [Validators.required]],
      statusId: ['', [Validators.required]],
      departmentId: ['', [Validators.required]]
    });
  }
  get f() {
    return this.regForm.controls;
  }

  submit() {
    this.isSubmit = true;
    if (this.regForm.invalid) {
      this.toastService.warning(
        "Vui lòng nhập đầy đủ các thông tin bắt buộc",
        "Thông báo"
      );
      return;
    }
    const payload = this.regForm.getRawValue(); 
    if (this.item) {

      this.update(payload);
    } else  {
      this.create(payload);
      
    }
    this.closeModal;
  }
  create(user: any) {


    this.authService.create(user).subscribe(
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

  update(payload: any) {
    console.log(payload);
    this.authService.update(payload).subscribe(res => {
      if (res.errorCode === 'OK') {
        this.toastService.success(res.errorDesc, 'Thông báo');
        this.passEntry.emit(res.data);
      } else {
        this.toastService.error(res.errorDesc, 'Thông báo');
      }

    }, err => {
      this.toastService.error(err, 'Thông báo');

    });
  }
  closeModal() {
    this.activeModal.dismiss();
  }
}
