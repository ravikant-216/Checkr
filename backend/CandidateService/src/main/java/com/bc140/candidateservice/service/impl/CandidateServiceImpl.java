package com.bc140.candidateservice.service.impl;

import jakarta.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.bc140.candidateservice.dao.NewCandidateRequest;
import com.bc140.candidateservice.dao.UpdateCandidateRequest;
import com.bc140.candidateservice.entity.Candidate;
import com.bc140.candidateservice.entity.Status;
import com.bc140.candidateservice.exception.EntityNotFound;
import com.bc140.candidateservice.repositories.CandidateRepository;
import com.bc140.candidateservice.repositories.StatusRepository;
import com.bc140.candidateservice.service.CandidateService;

@Service
@Transactional
class CandidateServiceImpl implements CandidateService {

  private CandidateRepository repository;
  private ModelMapper modelMapper;
  private StatusRepository statusRepository;

  public CandidateServiceImpl(CandidateRepository repository,
      ModelMapper modelMapper,
      StatusRepository statusRepository) {
    this.repository = repository;
    this.modelMapper = modelMapper;
    this.statusRepository = statusRepository;
  }

  @Override
  public Candidate saveCandidate(NewCandidateRequest newCandidateRequest) {
    Candidate candidate = modelMapper.map(newCandidateRequest, Candidate.class);
    Status status = statusRepository.findById(newCandidateRequest.getStatusId())
        .orElseThrow(() -> new EntityNotFound("Status Not Found"));
    candidate.setStatus(status);
    return repository.save(candidate);
  }

  @Override
  public Page<Candidate> getAllCandidates(Pageable pageable) {
    return repository.findAll(pageable);
  }

  @Override
  public Candidate getCandidateById(UUID id) {
    return repository.findById(id).orElseThrow(
        () -> new EntityNotFound("Candidate Not Found"));
  }

  @Override
  public List<Candidate> getCandidatesByReportBetweenDates(LocalDateTime startDate,
      LocalDateTime endDate) {
    return repository.findByReportCompletionDateBetween(startDate, endDate);
  }

  @Override
  public Candidate updateCandidateDetail(UUID id, UpdateCandidateRequest request) {
    Candidate candidate = repository.findById(id)
        .orElseThrow(() -> new EntityNotFound("Candidate Not Found"));
    candidate.setAdjudication(request.getAdjudication());
    return repository.save(candidate);
  }
}
