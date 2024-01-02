package fis.abcBank.mapper;

import fis.abcBank.dto.response.GenderResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface GenderMapper {
    List<GenderResponse> getAllGender();
}
