package com.bc140.UserService.dto;

import lombok.Builder;
import lombok.Data;

@Builder
@Data
public class ErrorResponse {
    private String message;
    private long time;
    private String title;
    private Integer status;

}
