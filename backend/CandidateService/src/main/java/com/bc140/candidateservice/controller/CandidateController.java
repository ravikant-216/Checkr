package com.bc140.candidateservice.controller;

import jakarta.validation.Valid;
import java.util.List;
import java.util.UUID;
import org.apache.hc.core5.http.HttpStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bc140.candidateservice.dto.NewCandidateRequest;
import com.bc140.candidateservice.dto.ReportRequestBody;
import com.bc140.candidateservice.dto.UpdateCandidateRequest;
import com.bc140.candidateservice.entity.Candidate;
import com.bc140.candidateservice.service.CandidateService;
import com.bc140.candidateservice.utils.Constant;

@RestController
@RequestMapping(Constant.CANDIDATE_ROUTE)
@Validated
public class CandidateController {

  private final CandidateService candidateService;

  public CandidateController(CandidateService candidateService) {
    this.candidateService = candidateService;
  }

  @PostMapping
  public ResponseEntity<Candidate> saveCandidate(@Valid @RequestBody NewCandidateRequest request) {
    return ResponseEntity.status(HttpStatus.SC_CREATED)
        .body(candidateService.saveCandidate(request));
  }

  @GetMapping
  public ResponseEntity<Page<Candidate>> getAllCandidates(@RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int size) {
    Pageable pageable = PageRequest.of(page, size);

    return ResponseEntity.status(HttpStatus.SC_OK)
        .body(candidateService.getAllCandidates(pageable));
  }

  @GetMapping(Constant.ID)
  public ResponseEntity<Candidate> getCandidateById(@PathVariable UUID id) {
    return ResponseEntity.status(HttpStatus.SC_OK)
        .body(candidateService.getCandidateById(id));
  }

  @PostMapping(Constant.REPORT)
  public ResponseEntity<List<Candidate>> getCandidateReport(@Valid @RequestBody ReportRequestBody request) {
    return ResponseEntity.status(HttpStatus.SC_OK)
        .body(candidateService.getCandidatesByReportBetweenDates(
            request.getStartDate(), request.getEndDate()));
  }

  @PatchMapping(Constant.ID)
  public ResponseEntity<Candidate> updateCandidate(@PathVariable UUID id,
      @Valid @RequestBody UpdateCandidateRequest request) {
    return ResponseEntity.status(HttpStatus.SC_OK)
        .body(candidateService.updateCandidateDetail(id, request));
  }
}
