package fis.abcBank.service;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.GenderResponse;
import fis.abcBank.dto.response.RoleResponse;
import fis.abcBank.dto.response.StatusResponse;
import fis.abcBank.dto.response.UserResponse;

public interface UserService {
    BaseResponse createUser(UserRequest request);
    BaseResponse login(UserResponse userResponses);
    BaseResponse getAll(UserResponse request);
    BaseResponse getAllGender(GenderResponse response);
    BaseResponse getAllRole(RoleResponse response);
    BaseResponse getAllStatus(StatusResponse response);
    BaseResponse updateUser(UserRequest request);
    BaseResponse checkout(UserResponse response);
//    BaseResponse updateStatus(UserResponse response);

}
