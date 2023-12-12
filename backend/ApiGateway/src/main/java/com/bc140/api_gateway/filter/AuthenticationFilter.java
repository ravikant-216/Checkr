package com.bc140.api_gateway.filter;

import com.bc140.api_gateway.exceptions.UnauthorizedAccessException;
import com.bc140.api_gateway.utils.Constants;
import com.bc140.api_gateway.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;

@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    private final RouteValidator validator;
    private final JwtUtil jwtUtil;

    @Autowired
    public AuthenticationFilter(RouteValidator validator, JwtUtil jwtUtil) {
        super(Config.class);
        this.validator = validator;
        this.jwtUtil = jwtUtil;
    }

    @Override
    public GatewayFilter apply(Config config) {
        return ((exchange, chain) -> {
            if (RouteValidator.isSecured.test(exchange.getRequest())) {
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new UnauthorizedAccessException(Constants.HEADER_MISSING_MESSAGE);
                }
                String authHeader = exchange.getRequest().getHeaders().get(HttpHeaders.AUTHORIZATION).get(0);
                if (authHeader != null && authHeader.startsWith(Constants.BEARER)) {
                    authHeader = authHeader.substring(7);
                }
                if (!jwtUtil.validateToken(authHeader)) {
                    throw new UnauthorizedAccessException(Constants.INVALID_TOKEN);
                }
            }
            return chain.filter(exchange);
        });
    }

    public static class Config {
    }
}
