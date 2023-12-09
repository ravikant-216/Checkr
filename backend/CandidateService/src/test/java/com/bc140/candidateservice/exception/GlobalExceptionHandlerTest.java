package com.bc140.candidateservice.exception;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.MethodArgumentNotValidException;

import com.bc140.candidateservice.payload.ErrorReponse;
import com.bc140.candidateservice.payload.ValidationErrorPayload;

import jakarta.validation.ConstraintViolationException;

@SpringBootTest
class GlobalExceptionHandlerTest {

    private GlobalExceptionHandler globalExceptionHandler;

    @BeforeEach
    void setUp() {
        globalExceptionHandler = new GlobalExceptionHandler();
    }

    @Test
    void testHandleEntityNotFound() {
        String message = "An unknown error occurred";
        EntityNotFound notFound = new EntityNotFound(message);
        // Act
        ResponseEntity<ErrorReponse> responseEntity = globalExceptionHandler.handleEntityNotFound(notFound);

        // Verify
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals(message, responseEntity.getBody().getMessage());

    }

    @Test
    void testHandleExceptionHandler() {
        String message = "hi";
        ResponseEntity<ErrorReponse> response = globalExceptionHandler.handleExceptionHandler(new Exception(message));
        assertEquals(HttpStatus.INTERNAL_SERVER_ERROR, response.getStatusCode());
        assertEquals(message, response.getBody().getMessage());
    }

    @Test
    void testHandleValidationErrors() {

        MethodArgumentNotValidException method = mock(MethodArgumentNotValidException.class);

        BindingResult bindingResult = mock(BindingResult.class);

        when(method.getBindingResult()).thenReturn(bindingResult);
        when(bindingResult.getFieldErrors()).thenReturn(new ArrayList<>());

        ResponseEntity<List<ValidationErrorPayload>> responseEntity = globalExceptionHandler
                .handleValidationErrors(method);
        assertEquals(HttpStatus.BAD_REQUEST, responseEntity.getStatusCode());
    }

    @Test
    void testHandleValidationExceptions() {
        ConstraintViolationException constraintViolationException = mock(ConstraintViolationException.class);
        when(constraintViolationException.getConstraintViolations()).thenReturn(new HashSet<>());

        var res = globalExceptionHandler.handleValidationExceptions(constraintViolationException);

        assertEquals(HttpStatus.BAD_REQUEST, res.getStatusCode());

    }
}
