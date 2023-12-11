package com.bc140.user_service.service.impl;

import com.bc140.user_service.dto.UserDTO;
import com.bc140.user_service.entity.User;
import com.bc140.user_service.exception.NotFoundException;
import com.bc140.user_service.exception.UserNotFound;
import com.bc140.user_service.repository.UserRepository;
import com.bc140.user_service.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public UserDTO getUser(UserDTO userDTO) {
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (!userByEmail.isPresent()) {
            throw new UserNotFound("user with email: " + userDTO.getEmail() + " is not found");
        }
        User user = userByEmail.get();
        if (!user.isPasswordValid(user.getPassword())) {
            throw new NotFoundException("Invalid user and password");
        }
        return modelMapper.map(userByEmail.get(), UserDTO.class);
    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (userByEmail.isPresent()) {
            throw new UserNotFound("user with email: " + userDTO.getEmail() + " is already exists");
        }
        String bcryptEncodedPassword = passwordEncoder.encode(userDTO.getPassword());
        userDTO.setPassword(bcryptEncodedPassword);
        User user = modelMapper.map(userDTO, User.class);
        return modelMapper.map(userRepository.save(user), UserDTO.class);
    }
    @Override
    public  UserDTO getUserByEmail(UserDTO userDTO){
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (!userByEmail.isPresent()) {
            throw new UserNotFound("user with email: " + userDTO.getEmail() + " is already exists");
        }
        return  modelMapper.map(userByEmail.get(), UserDTO.class);
    }
}
