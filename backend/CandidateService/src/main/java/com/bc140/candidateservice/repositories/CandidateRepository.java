package com.bc140.candidateservice.repositories;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import com.bc140.candidateservice.entity.Candidate;

public interface CandidateRepository extends JpaRepository<Candidate, UUID> {

  Page<Candidate> findAll(Pageable pageable);

  List<Candidate> findByReportCompletionDateBetween(LocalDateTime startDate,
      LocalDateTime endDate);
}
