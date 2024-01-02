package fis.abcBank.service.impl;

import com.google.common.base.Strings;
import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.DepartmentResponse;
import fis.abcBank.mapper.DepartmentMapper;
import fis.abcBank.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
@Service
public class DepartmentServiceImpl implements DepartmentService {
    @Autowired
    private DepartmentMapper departmentMapper;
    @Override
    public BaseResponse getAll(DepartmentResponse request) {
        BaseResponse baseResponse = new BaseResponse();
        List<DepartmentResponse> departmentResponses = departmentMapper.getAllDepartment(request);
        baseResponse.setData(departmentResponses);

        return baseResponse;
    }

    @Override
    public BaseResponse createDepartment(DepartmentResponse response) {
        BaseResponse baseResponse = new BaseResponse();
        try{
            if(Strings.isNullOrEmpty(response.getDepartmentName())||
                    Strings.isNullOrEmpty(response.getBranch())
            ){
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc("Không được để trống!");
            }
            int create = departmentMapper.createDepartment(response);
            if (create > 0) {

                baseResponse.setErrorCode(HttpStatus.OK.name());
                baseResponse.setErrorDesc("Tạo mới thành công");
            } else {
                baseResponse.setErrorCode(HttpStatus.BAD_REQUEST.name());
                baseResponse.setErrorDesc("Tạo mới thất bại");
            }

        } catch (Exception e){
            e.printStackTrace();
        }
        return baseResponse;
    }
}
