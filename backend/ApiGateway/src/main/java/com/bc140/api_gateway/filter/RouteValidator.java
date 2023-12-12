package com.bc140.api_gateway.filter;

import com.bc140.api_gateway.utils.ApiConstants;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.function.Predicate;

@Component
 class RouteValidator {
    public static final Predicate<ServerHttpRequest> isSecured =
            request -> ApiConstants.OPEN_API_ENDPOINTS
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().equals(uri));

}
