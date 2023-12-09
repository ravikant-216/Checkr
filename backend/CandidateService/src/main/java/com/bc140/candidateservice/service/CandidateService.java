package com.bc140.candidateservice.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.bc140.candidateservice.dao.NewCandidateRequest;
import com.bc140.candidateservice.dao.UpdateCandidateRequest;
import com.bc140.candidateservice.entity.Candidate;

public interface CandidateService {
  public Candidate saveCandidate(NewCandidateRequest newCandidateRequest);

  public Page<Candidate> getAllCandidates(Pageable pageable);

  public Candidate getCandidateById(UUID id);

  public List<Candidate> getCandidatesByReportBetweenDates(LocalDateTime startDate,
      LocalDateTime endDate);

  public Candidate updateCandidateDetail(UUID id, UpdateCandidateRequest request);
}
