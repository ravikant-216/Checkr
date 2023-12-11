package com.bc140.UserService.service;

import com.bc140.UserService.dto.UserDTO;

public interface UserService {
    UserDTO getUser(UserDTO userDTO);

    UserDTO createUser(UserDTO userDTO);
}
