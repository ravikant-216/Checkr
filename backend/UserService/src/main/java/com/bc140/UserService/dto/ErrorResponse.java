package com.bc140.UserService.dto;

import lombok.Builder;
import lombok.Data;

import java.util.Date;

@Builder
@Data
public class ErrorResponse {
    private  String message;
    private long time;
    private  String title;
    private  Integer status;

}
