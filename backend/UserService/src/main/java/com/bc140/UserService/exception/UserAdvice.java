package com.bc140.UserService.exception;

import com.bc140.UserService.dto.ErrorResponse;
import com.bc140.UserService.dto.UserDTO;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Date;

@RestControllerAdvice
public class UserAdvice {
    @ExceptionHandler(UserNotFound.class)
    private ResponseEntity<ErrorResponse>  userNotFound(UserNotFound userNotFound){
        ErrorResponse errorResponse= ErrorResponse.builder().title(HttpStatus.NOT_FOUND.getReasonPhrase()).time(System.currentTimeMillis()).message(userNotFound.getMessage()).status(HttpStatus.NOT_FOUND.value()).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(errorResponse);
    }
    @ExceptionHandler(NotFoundException.class)
    private ResponseEntity<ErrorResponse>  notFound(NotFoundException userNotFound){
        ErrorResponse errorResponse= ErrorResponse.builder().title(HttpStatus.NOT_FOUND.getReasonPhrase()).time(System.currentTimeMillis()).message(userNotFound.getMessage()).status(HttpStatus.NOT_FOUND.value()).build();
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(errorResponse);
    }


}
