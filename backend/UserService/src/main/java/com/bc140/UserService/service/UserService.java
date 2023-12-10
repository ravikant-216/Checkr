package com.bc140.UserService.service;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.dto.UserResponse;

public interface UserService {
    UserDTO getUser(UserDTO userDTO);

    UserDTO postUser(UserDTO userDTO);
}
