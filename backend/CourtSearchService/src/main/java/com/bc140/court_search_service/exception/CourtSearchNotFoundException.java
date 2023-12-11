package com.bc140.court_search_service.exception;

public class CourtSearchNotFoundException extends RuntimeException {

    public CourtSearchNotFoundException(String message){
        super(message);
    }
}
