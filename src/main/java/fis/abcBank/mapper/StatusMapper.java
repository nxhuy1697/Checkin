package fis.abcBank.mapper;

import fis.abcBank.dto.response.StatusResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StatusMapper {
    List<StatusResponse> getAllStatus();
}
