package com.bc140.user_service.service;

import com.bc140.user_service.dto.UserDTO;

public interface UserService {
    UserDTO getUser(UserDTO userDTO);

    UserDTO createUser(UserDTO userDTO);
}
