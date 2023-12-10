package com.bc140.UserService.exception;

public class UserNotFound extends RuntimeException{
    public  UserNotFound(String message){
        super(message);
    }
}
