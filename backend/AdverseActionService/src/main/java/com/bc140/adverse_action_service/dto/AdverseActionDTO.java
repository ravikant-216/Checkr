package com.bc140.adverse_action_service.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdverseActionDTO {

    private UUID id;

    private String name;

    private Date preNoticeDate;

    private Date postNoticeDate;

    private UUID statusId;

}
