import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CheckinService } from 'src/app/core/services/checkin.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  account: any;
  constructor(
    private checkinService: CheckinService,
    private toastrService: ToastrService,

    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(localStorage['account']);
    this.getAllCheckin();
  }
  onSubmit() {
    const payload = JSON.parse(localStorage.getItem('account') || '');
    this.checkinService.checkout(payload).subscribe((res: any) => {
      this.toastrService.success('Đăng xuất thành công');
      localStorage.removeItem('account');
      this.router.navigate(['/auth']);
    });
  }
  getAllCheckin(){
    this.checkinService.getAllCheckin({}).subscribe((res: any) => {
      console.log(res)
    });
  }
}
