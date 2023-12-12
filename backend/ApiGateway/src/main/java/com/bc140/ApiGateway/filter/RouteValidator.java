package com.bc140.ApiGateway.filter;

import com.bc140.ApiGateway.utils.ApiConstants;
import org.springframework.http.server.reactive.ServerHttpRequest;

import java.util.function.Predicate;

public class RouteValidator {
    public static final Predicate<ServerHttpRequest> isSecured =
            request -> ApiConstants.OPEN_API_ENDPOINTS
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().equals(uri));

}
