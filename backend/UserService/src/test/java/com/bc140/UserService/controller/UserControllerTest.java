package com.bc140.UserService.controller;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.service.UserService;
import com.bc140.UserService.service.impl.JwtService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.UUID;

@WebMvcTest(UserController.class)
class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserService userService;

    @MockBean
    private JwtService jwtService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    void testLoginUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("abc@gmail.com");
        userDTO.setPassword("abcderfg1@");
        userDTO.setId(UUID.randomUUID());

        Mockito.when(userService.getUser(Mockito.any(UserDTO.class))).thenReturn(userDTO);
        Mockito.when(jwtService.generateToken(Mockito.anyString(), Mockito.anyString())).thenReturn("TOKEN");

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/user/login")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userDTO)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("login successfully"));
    }

    @Test
    void testSignUpUser() throws Exception {
        UserDTO userDTO = new UserDTO();
        userDTO.setEmail("test@example.com");
        userDTO.setPassword("password");

        Mockito.when(userService.createUser(Mockito.any(UserDTO.class))).thenReturn(userDTO);
        Mockito.when(jwtService.generateToken(Mockito.anyString(), Mockito.anyString())).thenReturn("TOKEN");

        mockMvc.perform(MockMvcRequestBuilders.post("/api/v1/user/signup")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(userDTO)))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.message").value("login successfully"))
                .andExpect(MockMvcResultMatchers.jsonPath("$.id").value(userDTO.getId()));
    }
}
