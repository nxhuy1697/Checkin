package fis.abcBank.service.impl;

import com.google.common.base.Strings;
import fis.abcBank.CommonService.CommonService;
import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.GenderResponse;
import fis.abcBank.dto.response.RoleResponse;
import fis.abcBank.dto.response.StatusResponse;
import fis.abcBank.dto.response.UserResponse;
import fis.abcBank.mapper.*;
import fis.abcBank.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.Date;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserMapper userMapper;
    @Autowired
    private GenderMapper genderMapper;
    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private StatusMapper statusMapper;
    @Autowired
    private CheckinMapper checkinMapper;
    @Autowired
    private CommonService commonService;

    @Override
    public BaseResponse createUser(UserRequest request) {
        BaseResponse baseResponse = new BaseResponse();
        String userId = "EMP-";
        int getNextUserId = userMapper.getNextUserId();
        String pad = commonService.padLeft(String.valueOf(getNextUserId), 4, "0");
        try {
            if (Strings.isNullOrEmpty(request.getName()) ||
                    Strings.isNullOrEmpty(request.getAccount()) ||
                    Strings.isNullOrEmpty(request.getPasswords()) ||
                    Strings.isNullOrEmpty(request.getPhone()) ||
                    Strings.isNullOrEmpty(request.getCountry()) ||
                    Strings.isNullOrEmpty(request.getRoleId())) {
                return new BaseResponse(String.valueOf(HttpStatus.BAD_REQUEST.value()), "Tham số bắt buộc không được trống");
            }

            //check dup
            int checkDuplicate = userMapper.checkAccountDuplicate(request);
            if (checkDuplicate > 0) {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc("Account tồn tại");
            } else {

                //tạo mới
                request.setUserId((userId + pad).trim());
                int create = userMapper.createAccount(request);
                if (create > 0) {

                    baseResponse.setErrorCode(HttpStatus.OK.name());
                    baseResponse.setErrorDesc("Tạo mới thành công");
                } else {
                    baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                    baseResponse.setErrorDesc("Tạo mới thất bại");
                }


            }

        } catch (Exception e) {
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            baseResponse.setErrorDesc("tạo mới thất bại!");
        }
        return baseResponse;
    }

    @Override
    public BaseResponse login(UserResponse userResponses) {
        BaseResponse baseResponse = new BaseResponse();
        if (userResponses.getAccount() == null || userResponses.getPasswords() == null) {
            baseResponse.setErrorDesc("This filed can not be empty");
            return baseResponse;
        } else {
            if (userMapper.findByAccountAndPass(userResponses.getAccount(), userResponses.getPasswords()) != null) {
                UserResponse userResponse = userMapper.findByAccountAndPass(userResponses.getAccount(), userResponses.getPasswords());
                baseResponse.setErrorDesc("Login Success!");
                // check ngay
                int existingCheckIns = checkinMapper.checkDupUserIn(userResponse.getAccount());
                System.out.println(existingCheckIns);
                if (existingCheckIns > 0) {
                    baseResponse.setData(existingCheckIns);
                    baseResponse.setErrorCode(HttpStatus.OK.name());
                    baseResponse.setErrorDesc("Login thành công! Bạn đã checkin cho hôm nay");
                } else {
                    checkinMapper.createCheckin(userResponse);
                    baseResponse.setData(userResponse);
                }

            } else {

                baseResponse.setErrorDesc("Account not found!");
            }

        }
        return baseResponse;
    }


    @Override
    public BaseResponse getAll(UserResponse request) {
        BaseResponse baseResponse = new BaseResponse();
        List<UserRequest> userResponses = userMapper.getAllAccount(request);
        baseResponse.setData(userResponses);

        return baseResponse;
    }

    @Override
    public BaseResponse getAllRole(RoleResponse response) {
        BaseResponse baseResponse = new BaseResponse();
        List<RoleResponse> roleRequests = roleMapper.getAllRole();
        baseResponse.setData(roleRequests);

        return baseResponse;
    }

    @Override
    public BaseResponse getAllStatus(StatusResponse response) {
        BaseResponse baseResponse = new BaseResponse();
        List<StatusResponse> statusResponses = statusMapper.getAllStatus();
        baseResponse.setData(statusResponses);

        return baseResponse;
    }

    @Override
    public BaseResponse getAllGender(GenderResponse response) {
        BaseResponse baseResponse = new BaseResponse();
        List<GenderResponse> getSex = genderMapper.getAllGender();
        baseResponse.setData(getSex);
        System.out.println(getSex);
        return baseResponse;
    }


    @Override
    public BaseResponse updateUser(UserRequest request) {
        BaseResponse baseResponse = new BaseResponse();
        try {
            if (!StringUtils.isEmpty(request.getUserId())) {
                request.setName(request.getName().trim());
                request.setPasswords(request.getPasswords().trim());
                request.setDob(request.getDob());
                request.setSex(request.getSex());
                request.setCountry(request.getCountry().trim());
                request.setPhone(request.getPhone().trim());
                request.setRoleId(request.getRoleId());
                request.setStatusId(request.getStatusId());
                int update = userMapper.updateAccount(request);
                if (update > 0) {
                    baseResponse.setErrorDesc("Cập nhật thành công!");
                    baseResponse.setErrorCode(HttpStatus.OK.name());
                } else {
                    baseResponse.setErrorDesc("Cập nhật mới thất bại!");
                    baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                    return baseResponse;
                }
            } else {
                baseResponse.setErrorDesc("Dữ liệu đầu vào không hợp lệ");
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                return baseResponse;
            }

        } catch (Exception e) {
            baseResponse.setErrorDesc("Cập nhật thất bại");
            baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
            return baseResponse;
        }
        return baseResponse;
    }

    @Override
    public BaseResponse checkout(UserResponse response) {
        try {
            int a = checkinMapper.createCheckout(response);
            if (a >= 1) {
                return new BaseResponse(a);
            }
            return null;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;

    }

//    @Override
//    public BaseResponse updateStatus(UserResponse response) {
//        BaseResponse baseResponse = new BaseResponse();
//        try{
//            int updateStatus = userMapper.statusAccount(response);
//            if( updateStatus == 1){
//                baseResponse.setErrorCode(HttpStatus.OK.name());
//                baseResponse.setErrorDesc("Hoạt động!");
//                return baseResponse;
//            } else  {
//                baseResponse.setErrorCode(HttpStatus.OK.name());
//                baseResponse.setErrorDesc("Không hoạt dộng!");
//            }
//            return baseResponse;
//
//        } catch (Exception e){
//            e.printStackTrace();
//        }
//        return null;
//    }

}
