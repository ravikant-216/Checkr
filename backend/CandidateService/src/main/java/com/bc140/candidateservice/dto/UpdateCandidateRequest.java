package com.bc140.candidateservice.dto;

import com.bc140.candidateservice.enums.Adjudication;

import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class UpdateCandidateRequest {

    @Enumerated(EnumType.STRING)
    private Adjudication adjudication;
}
