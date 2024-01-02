import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { AuthService } from 'src/app/core/services/auth.service';
import { CheckinService } from 'src/app/core/services/checkin.service';

@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss']
})
export class CheckinComponent implements OnInit{
  listCheckin: any;
  searchCheckin!: FormGroup;
  role!: Array<any>;
  //search
  // userId!: '';
  // name!: '';
  // roleId!: '';
  // checkinDate!: '';


  ngOnInit(): void {
  this.initForm();
  this.getRoleData();
  this.search();
  }

  constructor(
    private checkinService: CheckinService,
    private fb: FormBuilder,
    private authService: AuthService
  ){
  }
  initForm() {
    this.searchCheckin = this.fb.group({
      userId: [''], // Khai báo các trường tương ứng với form
      name: [''],
      roleId: [''],
      checkinDate: ['']
    });
  }
  get f() {
    return this.searchCheckin.controls;
  }

  search() {
    const json = {
      userId: this.searchCheckin.get('userId')?.value,
      name: this.searchCheckin.get('name')?.value,
      roleId: this.searchCheckin.get('roleId')?.value,
      checkinDate: this.searchCheckin.get('checkinDate')?.value
    };
    this.checkinService.getAllCheckin(json).subscribe((res) => {
      if (res.data !== null) {
        this.listCheckin = res.data;

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
  
  formatTime(time: any) {
    if(time == null){
      return '';
    }
    return moment(time, 'HH:mm:ss').format('HH:mm');
  }
  formatWorkTime(checkoutTime: any, checkinTime: any) {
    if(checkoutTime == null || checkinTime==null){
      return '';
    }

    const checkin = new Date(`1970-01-01T${checkinTime}Z`);
    const checkout = new Date(`1970-01-01T${checkoutTime}Z`);

    const differenceInMilliseconds = checkout.getTime() - checkin.getTime();
    const differenceInSeconds = differenceInMilliseconds / 1000;
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor((differenceInSeconds % 3600) / 60);

    return `${hours}:${minutes}`;
  }
  onReset(){
    this.searchCheckin.reset();
    this.search();
  }

}
