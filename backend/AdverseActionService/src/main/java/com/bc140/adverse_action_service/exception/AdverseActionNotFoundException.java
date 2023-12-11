package com.bc140.adverse_action_service.exception;

public class AdverseActionNotFoundException extends RuntimeException {

    public AdverseActionNotFoundException (String message){
        super(message);
    }
}
