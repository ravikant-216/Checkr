package com.bc140.candidateservice.dto;

import jakarta.validation.constraints.NotBlank;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import com.bc140.candidateservice.enums.Adjudication;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class NewCandidateRequest {

  @NotBlank
  private String name;

  private Adjudication adjudication;

  @NotBlank
  private String location;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDate dob;

  @NotBlank
  private String phoneNumber;

  @NotBlank
  private String zipcode;

  @NotBlank
  private String socialSecurity;

  @NotBlank
  private String driversLicense;

  private UUID statusId;

  @NotBlank
  private String packages;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime reportCreatedAt;

  @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
  private LocalDateTime reportCompletionDate;

  private Integer turnAroundTime;
}
