package com.bc140.candidateservice.exception;

public class EntityNotFound extends RuntimeException {
    public EntityNotFound(String messString) {
        super(messString);
    }
}
