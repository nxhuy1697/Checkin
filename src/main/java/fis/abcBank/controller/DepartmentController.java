package fis.abcBank.controller;

import fis.abcBank.dto.base.BaseResponse;
import fis.abcBank.dto.response.DepartmentResponse;
import fis.abcBank.dto.response.UserResponse;
import fis.abcBank.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
@RequestMapping("/department")
public class DepartmentController {
    @Autowired
    private DepartmentService service;
    @PostMapping(value = "/getAll", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> getAll(@RequestBody DepartmentResponse request){
        return new ResponseEntity<>(service.getAll(request), HttpStatus.OK);
    }
    @PostMapping(value = "/create", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<BaseResponse> create(@RequestBody DepartmentResponse request){
        return new ResponseEntity<>(service.createDepartment(request), HttpStatus.OK);
    }
}
