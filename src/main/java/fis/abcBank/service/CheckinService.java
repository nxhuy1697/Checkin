package fis.abcBank.service;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.response.CheckoutResponse;
import fis.abcBank.dto.response.UserResponse;

public interface CheckinService {
    BaseResponse getAllCheckin(CheckoutResponse request);
}
