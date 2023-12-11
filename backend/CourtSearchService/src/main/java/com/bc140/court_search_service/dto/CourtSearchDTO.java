package com.bc140.court_search_service.dto;

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
public class CourtSearchDTO {

    private UUID id;

    private String search;

    private UUID statusId;

    private Date date;

    private UUID candidateId;

}
