import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CommandURL } from './api-commands';
import { BaseResponse } from '../models/baseresponse';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private httpClient: HttpClient) { }
  getAllDepartment(user:any){
    return this.httpClient.post<BaseResponse>(CommandURL.GET_DEPARTMENT, user)
  }
  create(user:any){
    return this.httpClient.post<BaseResponse>(CommandURL.CREATE_DEPARTMENT, user)
  }
}
