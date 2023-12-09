package com.bc140.candidateservice.exception;

import static org.junit.Assert.assertEquals;

import org.junit.Test;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * EntityNotFoundTest
 */
@SpringBootTest
public class EntityNotFoundTest {
    @Test
    public void testEmptyConstructor() {
        // Mock
        String message = "test exception";
        try {
            throw new EntityNotFound(message);
        } catch (EntityNotFound ex) {
            assertEquals(message, ex.getMessage());
        }
    }

}
