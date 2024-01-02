package fis.abcBank.mapper;

import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.UserResponse;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    int createAccount (UserRequest request);
    int checkAccountDuplicate (UserRequest account);
    UserResponse findByAccountAndPass (String account, String passwords);
    List<UserRequest> getAllAccount(UserResponse request);
    int updateAccount(UserRequest request);
    int getNextUserId();
}
