package fis.abcBank.mapper;

import fis.abcBank.dto.response.CheckoutResponse;
import fis.abcBank.dto.response.UserResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CheckinMapper {
    int createCheckin(UserResponse response);
    int createCheckout(UserResponse response);
    int checkDupUserIn(String response);
    List<CheckoutResponse> getAllCheckin(CheckoutResponse response);

}
