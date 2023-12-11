package com.bc140.user_service.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {

    private UUID id;

    private String name;
    @NotBlank(message = "Email is required")
    @Email(message = "email is required")
    private String email;
    @NotBlank(message = "Password is required")
    private String password;

}
