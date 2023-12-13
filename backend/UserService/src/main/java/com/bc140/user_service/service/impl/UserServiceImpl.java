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
    private final UserRepository userRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder passwordEncoder;
    private static final String EMAIL_ERROR="user with email: ";
    @Autowired
    public UserServiceImpl(UserRepository userRepository, ModelMapper modelMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.modelMapper = modelMapper;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public UserDTO getUser(UserDTO userDTO) {
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (!userByEmail.isPresent()) {
            throw new UserNotFound(EMAIL_ERROR + userDTO.getEmail() + " is not found");
        }
        User user = userByEmail.get();
        if (!user.isPasswordValid(userDTO.getPassword())) {
            throw new NotFoundException("Invalid user and password");
        }
        return modelMapper.map(userByEmail.get(), UserDTO.class);

    }

    @Override
    public UserDTO createUser(UserDTO userDTO) {
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (userByEmail.isPresent()) {
            throw new UserNotFound(EMAIL_ERROR + userDTO.getEmail() + " is already exists");
        }
        User user = modelMapper.map(userDTO, User.class);
        return modelMapper.map(userRepository.save(user), UserDTO.class);
    }
    @Override
    public  UserDTO getUserByEmail(UserDTO userDTO){
        Optional<User> userByEmail = userRepository.findByEmail(userDTO.getEmail());
        if (!userByEmail.isPresent()) {
            throw new UserNotFound(EMAIL_ERROR + userDTO.getEmail() + " is already exists");
        }
        return  modelMapper.map(userByEmail.get(), UserDTO.class);
    }
}
