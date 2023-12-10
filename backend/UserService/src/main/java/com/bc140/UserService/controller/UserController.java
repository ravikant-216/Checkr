package com.bc140.UserService.controller;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.dto.UserResponse;
import com.bc140.UserService.service.UserService;
import com.bc140.UserService.service.impl.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@Slf4j
public class UserController {
    @Autowired
    private UserService userService;
    private final JwtService jwtService;

    public UserController(JwtService jwtService,UserService userService) {
        this.jwtService = jwtService;
        this.userService= userService;
    }

    @PostMapping("/login")
    private ResponseEntity<UserResponse> loginUser(UserDTO userDto){
        String token = jwtService.generateToken(userDto.getEmail(), userDto.getPassword());
        UserDTO loginUser=userService.getUser(userDto);
        UserResponse userResponse= new UserResponse(loginUser.getId(),"login successfully",token);
        return  ResponseEntity.status(HttpStatus.OK)
                .body(userResponse);
    }

    @PostMapping("/signup")
    private  ResponseEntity<UserResponse> signUpUser(UserDTO userDto){
        UserDTO savedUserDto=userService.postUser(userDto);
        String token = jwtService.generateToken(userDto.getEmail(), userDto.getPassword());
        UserResponse userResponse= new UserResponse(savedUserDto.getId(),"login successfully",token);
        return  ResponseEntity.status(HttpStatus.OK)
                .body(userResponse);
    }

}
