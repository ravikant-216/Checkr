package com.bc140.UserService.service.impl;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.dto.UserResponse;
import com.bc140.UserService.entity.User;
import com.bc140.UserService.exception.UserNotFound;
import com.bc140.UserService.repository.UserRepository;
import com.bc140.UserService.service.UserService;
import org.modelmapper.ModelMapper;

import java.util.Optional;

public class UserServiceImpl implements UserService {
    private UserRepository userRepository;

    private ModelMapper modelMapper;

    @Override
    public UserDTO getUser(UserDTO userDTO) {
        Optional<UserDTO> userByEmail= userRepository.findByEmail(userDTO.getEmail());
        if(userByEmail.get()!=null){
            throw  new UserNotFound("user with email: "+userDTO.getEmail()+" is not found");
        }
        return   modelMapper.map(userByEmail.get(),UserDTO.class);

    }

    @Override
    public UserDTO postUser(UserDTO userDTO) {
        Optional<UserDTO> userByEmail= userRepository.findByEmail(userDTO.getEmail());
        if(userByEmail.get()==null){
            throw  new UserNotFound("user with email: "+userDTO.getEmail()+" is already exists");
        }
        User user= modelMapper.map(userDTO,User.class);
        return modelMapper.map(userRepository.save(user),UserDTO.class);
    }
}
