import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BaseResponse } from '../models/baseresponse';
import { User } from '../models/user-models';
import { CommandURL } from './api-commands';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient : HttpClient) { }
  login (user : User) {
    return this.httpClient.post<BaseResponse>(CommandURL.LOGIN_USER, user);
  }
  create (user: User) {
    return this.httpClient.post<BaseResponse>(CommandURL.CREATE_USER, user);
  }

  update (user : User) {
    return this.httpClient.post<BaseResponse>(CommandURL.UPDATE_USER, user);
  }
  // delete (user : User) {
  //   return this.httpClient.post<BaseResponse>(CommandURL.DELETE_USER, user)
  // }

  get (user : any){
    return this.httpClient.post<BaseResponse>(CommandURL.GET_USER, user)
  }
  getGenderData(user: any){
    return this.httpClient.post<BaseResponse>(CommandURL.GET_GENDER_DATA, user)
  }
  getRoleData(user: any){
    return this.httpClient.post<BaseResponse>(CommandURL.GET_ROLE_DATA, user)
  }
  getStatus(user: any){
    return this.httpClient.post<BaseResponse>(CommandURL.CHANGE_STATUS, user)
  }

}
