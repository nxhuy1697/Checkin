import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/baseresponse';
import { CommandURL } from './api-commands';

@Injectable({
  providedIn: 'root'
})
export class CheckinService {

  constructor(private httpClient: HttpClient) { }
  checkout(user:any){
    return this.httpClient.post<BaseResponse>(CommandURL.CHECKOUT, user)
  }
  getAllCheckin(user:any){
    return this.httpClient.post<BaseResponse>(CommandURL.GET_ALL_CHECKIN, user)
  }

  

}
