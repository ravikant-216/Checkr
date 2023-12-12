package com.bc140.ApiGateway.utils;

import java.util.List;

public class ApiConstants {
    public static final List<String> OPEN_API_ENDPOINTS = List.of(
            "/api/v1/user/reset-password",
            "/api/v1/user/login",
            "/api/v1/user/signup",
            "/eureka"
    );

    private ApiConstants() {
    }
}
