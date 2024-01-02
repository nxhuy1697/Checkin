package fis.abcBank.mapper;

import fis.abcBank.dto.response.GenderResponse;
import fis.abcBank.dto.response.RoleResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RoleMapper {
    List<RoleResponse> getAllRole();
}
