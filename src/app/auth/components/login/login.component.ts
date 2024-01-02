import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/user-models';
import { AuthService } from 'src/app/core/services/auth.service';
import { CheckinService } from 'src/app/core/services/checkin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  submitted = false;
  account: any;
  loginForm!: any;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private toastService: ToastrService
  ) {}
  initForm(){
    this.loginForm = this.fb.group({
      account: ['', Validators.required],
      passwords: ['', Validators.required]
    });
  }
  ngOnInit(): void {
    this.initForm();
  }
  get f() {
    return this.loginForm.controls;
  }
 

  onSubmit() {
    this.submitted = true;

    console.log(this.loginForm);
    const json = {
      ...this.loginForm.value
    }
    this.authService.login(json).subscribe((res) => {
      if (res.data !== null) {
        this.account =res.data.account;
        localStorage.setItem('account',JSON.stringify(json));
        this.toastService.success(res.errorDesc, 'Thông báo');
        this.router.navigate(['/dashboard']);

      } else {
        this.toastService.error(res.errorDesc, 'Thông báo');
      }
      console.log(res)
    });
  }
}
