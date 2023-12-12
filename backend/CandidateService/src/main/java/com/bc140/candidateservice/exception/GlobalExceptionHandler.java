package com.bc140.candidateservice.exception;

import jakarta.validation.ConstraintViolationException;
import java.util.List;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.bc140.candidateservice.payload.ErrorReponse;
import com.bc140.candidateservice.payload.ValidationErrorPayload;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<List<ValidationErrorPayload>> handleValidationErrors(MethodArgumentNotValidException ex) {
        List<ValidationErrorPayload> errors = ex.getBindingResult()
                .getFieldErrors()
                .stream()
                .map(error -> new ValidationErrorPayload(error.getField(),
                        error.getDefaultMessage()))
                .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }

    @ExceptionHandler(EntityNotFound.class)
    public ResponseEntity<ErrorReponse> handleEntityNotFound(EntityNotFound ex) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body(
                        new ErrorReponse(HttpStatus.NOT_FOUND.toString(), ex.getMessage()));
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorReponse> handleExceptionHandler(Exception ex) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ErrorReponse(HttpStatus.INTERNAL_SERVER_ERROR.toString(),
                        ex.getMessage()));
    }

    @ExceptionHandler(ConstraintViolationException.class)
    public ResponseEntity<List<ValidationErrorPayload>> handleValidationExceptions(ConstraintViolationException ex) {
        List<ValidationErrorPayload> errors = ex.getConstraintViolations()
                .stream()
                .map(val -> {
                    var list = val.getPropertyPath().iterator();
                    String fieldValue = list.next().toString();
                    while (list.hasNext()) {
                        fieldValue = list.next().toString();
                    }
                    return new ValidationErrorPayload(fieldValue, val.getMessage());
                })
                .toList();
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errors);
    }
}
