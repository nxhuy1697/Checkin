package fis.abcBank.service;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.response.CheckoutResponse;
import fis.abcBank.dto.response.DepartmentResponse;

public interface DepartmentService {
    BaseResponse getAll (DepartmentResponse request);
    BaseResponse createDepartment (DepartmentResponse response);
}
