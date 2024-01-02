package fis.abcBank.mapper;

import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.DepartmentResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DepartmentMapper {
    List<DepartmentResponse> getAllDepartment(DepartmentResponse response);
    int createDepartment (DepartmentResponse request);
}
