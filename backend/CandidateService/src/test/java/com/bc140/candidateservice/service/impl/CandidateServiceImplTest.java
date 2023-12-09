package com.bc140.candidateservice.service.impl;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThrows;
import static org.mockito.Mockito.verify;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import com.bc140.candidateservice.dao.NewCandidateRequest;
import com.bc140.candidateservice.dao.UpdateCandidateRequest;
import com.bc140.candidateservice.entity.Candidate;
import com.bc140.candidateservice.entity.Status;
import com.bc140.candidateservice.exception.EntityNotFound;
import com.bc140.candidateservice.repositories.CandidateRepository;
import com.bc140.candidateservice.repositories.StatusRepository;

@SpringBootTest
class CandidateServiceImplTest {

    @MockBean
    private CandidateRepository candidateRepository;

    @MockBean
    private StatusRepository statusRepository;

    @MockBean
    private ModelMapper modelMapper;

    @Autowired
    private CandidateServiceImpl candidateService;

    @Test
    void testGetAllCandidates() {

        Pageable pageable = PageRequest.of(1, 2);

        Mockito.when(candidateRepository.findAll(pageable))
                .thenReturn(new PageImpl<>(List.of(new Candidate(), new Candidate())));
        var res = candidateService.getAllCandidates(pageable);
        assertEquals(2, res.get().toList().size());

    }

    @Test
    void testGetCandidateByIdCandidateFound() {

        Candidate candidate = new Candidate();
        UUID uuid = UUID.randomUUID();
        Mockito.when(candidateRepository.findById(uuid)).thenReturn(Optional.of(candidate));
        Candidate res = candidateService.getCandidateById(uuid);
        assertEquals(candidate, res);

    }

    @Test
    void testGetCandidateByIdCandidateNotFound() {

        UUID uuid = UUID.randomUUID();
        Mockito.when(candidateRepository.findById(uuid)).thenReturn(Optional.empty());
        assertThrows(EntityNotFound.class, () -> candidateService.getCandidateById(uuid));

    }

    @Test
    void testGetCandidatesByReportBetweenDates() {

        LocalDateTime local = LocalDateTime.now();
        Mockito.when(candidateRepository.findByReportCompletionDateBetween(local, local))
                .thenReturn(List.of(new Candidate(), new Candidate()));
        var res = candidateService.getCandidatesByReportBetweenDates(local, local);
        verify(candidateRepository).findByReportCompletionDateBetween(local, local);
        assertEquals(2, res.size());
    }

    @Test
    void testSaveCandidateWhenStatusFound() {

        Candidate candidate = new Candidate();
        NewCandidateRequest candidateRequest = new NewCandidateRequest();
        UUID statusId = UUID.randomUUID();
        candidateRequest.setStatusId(statusId);

        Mockito.when(candidateRepository.save(candidate)).thenReturn(candidate);
        Mockito.when(modelMapper.map(candidateRequest, Candidate.class)).thenReturn(candidate);
        Mockito.when(statusRepository.findById(statusId)).thenReturn(Optional.of(new Status()));
        var res = candidateService.saveCandidate(candidateRequest);
        verify(candidateRepository).save(candidate);
        assertEquals(res, candidate);
    }

    void testSaveCandidateWhenNotFound() {

        Candidate candidate = new Candidate();
        NewCandidateRequest candidateRequest = new NewCandidateRequest();
        UUID statusId = UUID.randomUUID();

        Mockito.when(candidateRepository.save(candidate)).thenReturn(candidate);
        Mockito.when(modelMapper.map(candidateRequest, Candidate.class)).thenReturn(candidate);
        Mockito.when(statusRepository.findById(statusId)).thenReturn(Optional.empty());
        assertThrows(EntityNotFound.class, () -> candidateService.saveCandidate(candidateRequest));
    }

    @Test
    void testUpdateCandidateDetailCandidateFound() {

        Candidate candidate = new Candidate();
        UUID candidateId = UUID.randomUUID();

        UpdateCandidateRequest updateCandidateRequest = new UpdateCandidateRequest();
        Mockito.when(candidateRepository.findById(candidateId)).thenReturn(Optional.of(candidate));
        Mockito.when(candidateRepository.save(candidate)).thenReturn(candidate);
        var res = candidateService.updateCandidateDetail(candidateId, updateCandidateRequest);
        assertEquals(candidate, res);
    }

    @Test
    void testUpdateCandidateDetailCandidateNotFound() {

        Candidate candidate = new Candidate();
        UUID candidateId = UUID.randomUUID();

        UpdateCandidateRequest updateCandidateRequest = new UpdateCandidateRequest();
        Mockito.when(candidateRepository.findById(candidateId)).thenReturn(Optional.empty());
        Mockito.when(candidateRepository.save(candidate)).thenReturn(candidate);
        assertThrows(EntityNotFound.class,
                () -> candidateService.updateCandidateDetail(candidateId, updateCandidateRequest));
    }
}
