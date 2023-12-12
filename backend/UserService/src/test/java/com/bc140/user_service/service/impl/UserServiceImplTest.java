package com.bc140.user_service.service.impl;

import com.bc140.user_service.dto.UserDTO;
import com.bc140.user_service.entity.User;
import com.bc140.user_service.exception.NotFoundException;
import com.bc140.user_service.exception.UserNotFound;
import com.bc140.user_service.repository.UserRepository;
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
import static org.mockito.ArgumentMatchers.*;

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

        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());

        assertThrows(UserNotFound.class, () -> userService.getUser(inputUserDTO));
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

         Mockito.when(modelMapper.map(any(UserDTO.class), eq(User.class))).thenReturn(inputUser);
        Mockito.when(modelMapper.map(any(User.class), eq(UserDTO.class))).thenReturn(inputUserDTO);

        Mockito.when(userRepository.save(any(User.class))).thenReturn(inputUser);

        UserDTO createdUserDTO = userService.createUser(inputUserDTO);

        assertNotNull(createdUserDTO);
        assertEquals(inputUserDTO.getEmail(), createdUserDTO.getEmail());
        assertEquals("encodedPassword", createdUserDTO.getPassword());
    }

    @Test
    void testGetUserByEmail_UserNotFound() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");

        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.of(new User()));


        assertDoesNotThrow(() -> userService.getUserByEmail(inputUserDTO),
                "Unexpected exception when user with the given email does not exist");
    }

    @Test
    void testGetUserByEmail_UserFound() {
        UserDTO inputUserDTO = new UserDTO();
        inputUserDTO.setEmail("test@example.com");

        Mockito.when(userRepository.findByEmail(anyString())).thenReturn(Optional.empty());
        assertThrows(UserNotFound.class, () -> userService.getUserByEmail(inputUserDTO),
                "Expected UserNotFound exception when user with the given email exists");

    }

}
