package com.bc140.UserService.confg;

import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class UserModelMapper {
    @Bean
    ModelMapper modelMapper() {
        return new ModelMapper();
    }
}
