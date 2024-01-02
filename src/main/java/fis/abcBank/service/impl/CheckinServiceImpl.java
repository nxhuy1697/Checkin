package fis.abcBank.service.impl;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.response.CheckoutResponse;
import fis.abcBank.mapper.CheckinMapper;
import fis.abcBank.service.CheckinService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckinServiceImpl implements CheckinService {
    @Autowired
    private CheckinMapper checkinMapper;
    @Override
    public BaseResponse getAllCheckin(CheckoutResponse request) {
        BaseResponse baseResponse = new BaseResponse();
        List<CheckoutResponse> checkoutResponses = checkinMapper.getAllCheckin(request);
        baseResponse.setData(checkoutResponses);
        return baseResponse;

    }
}
