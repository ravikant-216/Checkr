package com.bc140.UserService.service.impl;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.entity.User;
import com.bc140.UserService.exception.NotFoundException;
import com.bc140.UserService.exception.UserNotFound;
import com.bc140.UserService.repository.UserRepository;
import com.bc140.UserService.service.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Optional;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceImplTest {

    @InjectMocks
    private UserServiceImpl userService;

    @Mock
    private UserRepository userRepository;

    @Mock
    private ModelMapper modelMapper;

    @Mock
    private PasswordEncoder passwordEncoder;

    @Test
    void testGetUser() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");
        inputUserDTO.setPassword("encodedPassword");
        inputUserDTO.setName("a");
        inputUserDTO.setId(UUID.randomUUID());

        User userEntity = new User();
        userEntity.setEmail("test@example.com");
        userEntity.setPassword("encodedPassword");
        userEntity.setName("a");
        userEntity.setId(UUID.randomUUID());

        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        assertThrows(UserNotFound.class, () -> userService.getUser(inputUserDTO));
    }

    @Test
    void testGetUserInValid() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");
        inputUserDTO.setPassword("encodedPassword");
        inputUserDTO.setName("a");
        inputUserDTO.setId(UUID.randomUUID());

        User userEntity = new User();
        userEntity.setEmail("test@example.com");
        userEntity.setPassword("encodedPassword");
        userEntity.setName("a");
        userEntity.setId(UUID.randomUUID());

        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(userEntity));

        assertThrows(NotFoundException.class, () -> userService.getUser(inputUserDTO));
    }

    @Test
    void testCreateUserUserAlreadyExists() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");
        inputUserDTO.setPassword("abc");

        User existingUser = new User();
        existingUser.setEmail("test@example.com");
        existingUser.setPassword("abc");
        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(existingUser));
        assertThrows(UserNotFound.class, () -> userService.createUser(inputUserDTO));
    }

    @Test
    void testCreateUser() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");
        inputUserDTO.setPassword("password");
        User inputUser = new User();
        inputUser.setEmail("test@example.com");
        inputUser.setPassword("password");
        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        Mockito.when(passwordEncoder.encode(anyString())).thenReturn("encodedPassword");

        // Mocking the behavior of the modelMapper to map from UserDTO to User
        Mockito.when(modelMapper.map(any(UserDTO.class), eq(User.class))).thenReturn(inputUser);
        Mockito.when(modelMapper.map(any(User.class), eq(UserDTO.class))).thenReturn(inputUserDTO);

        // Mocking the behavior of userRepository.save to return the user passed to it
        Mockito.when(userRepository.save(any(User.class))).thenReturn(inputUser);

        // Invoking the createUser method
        UserDTO createdUserDTO = userService.createUser(inputUserDTO);

        // Asserting that the returned UserDTO has the expected properties
        assertNotNull(createdUserDTO);
        assertEquals(inputUserDTO.getEmail(), createdUserDTO.getEmail());
        assertEquals("encodedPassword", createdUserDTO.getPassword());
    }

}
