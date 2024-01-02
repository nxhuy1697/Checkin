package fis.abcBank.CommonService.CommonServiceImpl;

import fis.abcBank.CommonService.CommonService;
import org.springframework.stereotype.Service;

@Service
public class CommonServiceImpl implements CommonService {
    @Override
    public String padLeft(String input, int len, String chr) {
        if (input.length() > len) {
            len = len + (input.length() - len);
        }
        String output = input;
        for (int i = 1; i <= len - input.length(); i++) {
            output = chr + output;
        }
        return output;
    }
}
