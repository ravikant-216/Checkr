package com.bc140.user_service.controller;

import com.bc140.user_service.dto.UserDTO;
import com.bc140.user_service.dto.UserResponse;
import com.bc140.user_service.service.UserService;
import com.bc140.user_service.service.impl.JwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/user")
@Slf4j
public class UserController {
    private final JwtService jwtService;
    private final UserService userService;

    @Autowired
    public UserController(JwtService jwtService, UserService userService) {
        this.jwtService = jwtService;
        this.userService = userService;
    }

    @PostMapping("/login")
    public ResponseEntity<UserResponse> loginUser(@RequestBody UserDTO userDto) {
        log.info("Received login request for user: {}", userDto.getEmail());

        String token = jwtService.generateToken(userDto.getEmail(), userDto.getPassword());

        UserDTO loginUser = userService.getUser(userDto);

        UserResponse userResponse = new UserResponse(loginUser.getId(), "login successfully", token);
        log.info("Sending login response for user: {}", loginUser.getEmail());

        return ResponseEntity.status(HttpStatus.OK)
                .body(userResponse);
    }

    @PostMapping("/signup")
    public ResponseEntity<UserResponse> signUpUser(@RequestBody UserDTO userDto) {
        log.info("Received signup request for user: {}", userDto.getEmail());

        UserDTO savedUserDto = userService.createUser(userDto);

        String token = jwtService.generateToken(userDto.getEmail(), savedUserDto.getPassword());

        UserResponse userResponse = new UserResponse(savedUserDto.getId(), "signup successfully", token);
        log.info("Sending signup response for user: {}", savedUserDto.getEmail());

        return ResponseEntity.status(HttpStatus.OK)
                .body(userResponse);
    }
}
