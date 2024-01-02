package fis.abcBank.controller;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.request.UserRequest;
import fis.abcBank.dto.response.*;
import fis.abcBank.service.CheckinService;
import fis.abcBank.service.UserService;
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private CheckinService checkinService;
    @PostMapping(value = "/createUser", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> createUser(@RequestBody UserRequest request) {
        return new ResponseEntity<>(userService.createUser(request), HttpStatus.OK);
    }

    @PostMapping(value="/login", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> login (@RequestBody UserResponse request){
     return new ResponseEntity<>(userService.login(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getAll", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public  ResponseEntity<BaseResponse> getAll(@RequestBody UserResponse request){
        return new ResponseEntity<>(userService.getAll(request), HttpStatus.OK);
    }
    @PostMapping(value = "/update", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> updateUser(@RequestBody UserRequest request){
        return new ResponseEntity<>(userService.updateUser(request), HttpStatus.OK);
    }
    @PostMapping(value = "/getAllGender", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> getAllSex(@RequestBody GenderResponse response){
        return new ResponseEntity<>(userService.getAllGender(response), HttpStatus.OK);
    }
    @PostMapping(value = "/getAllRole", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> getAllRole(@RequestBody RoleResponse response){
        return new ResponseEntity<>(userService.getAllRole(response), HttpStatus.OK);
    }
    @PostMapping(value="/checkout", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<?> logout (@RequestBody UserResponse request){
        return new ResponseEntity<>(userService.checkout(request), HttpStatus.OK);
    }
    @PostMapping(value="/getAllCheckin", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> getAllCheckin (@RequestBody CheckoutResponse request){
        return new ResponseEntity<>(checkinService.getAllCheckin(request), HttpStatus.OK);
    }
    @PostMapping(value="/getAllStatus", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> getAllStatus (@RequestBody StatusResponse request){
        return new ResponseEntity<>(userService.getAllStatus(request), HttpStatus.OK);
    }
//    @PostMapping(value = "/deactivate", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<BaseResponse> deactivate (@RequestBody UserResponse request){
//        return new ResponseEntity<>(userService.updateStatus(request), HttpStatus.OK);
//    }
}
