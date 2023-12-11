package com.bc140.user_service.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.security.SecureRandom;

@Configuration
public class AuthenticationConfig {

    @Bean
    public PasswordEncoder passwordEncoder() {
        final int strength = 10;
        return new BCryptPasswordEncoder(strength, new SecureRandom());
    }
}
