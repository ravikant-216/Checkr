package com.bc140.candidateservice.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.data.domain.PageImpl;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

import com.bc140.candidateservice.dto.NewCandidateRequest;
import com.bc140.candidateservice.dto.ReportRequestBody;
import com.bc140.candidateservice.dto.UpdateCandidateRequest;
import com.bc140.candidateservice.entity.Candidate;
import com.bc140.candidateservice.entity.Status;
import com.bc140.candidateservice.enums.Adjudication;
import com.bc140.candidateservice.service.CandidateService;
import com.bc140.candidateservice.utils.Constant;
import com.fasterxml.jackson.core.JsonProcessingException;

@WebMvcTest(CandidateController.class)
class CandidateControllerTest extends AbstractControllerTest {

        @Autowired
        CandidateController candidateController;

        @MockBean
        CandidateService candidateService;

        @BeforeEach
        void setUp() {
                mockMvc = MockMvcBuilders.standaloneSetup(candidateController).build();
        }

        @Test
        void testGetAllCandidates() throws Exception {
                when(candidateService.getAllCandidates(any()))
                                .thenReturn(new PageImpl<>(List.of(getCandidate())));
                MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.get(Constant.CANDIDATE_ROUTE))
                                .andReturn();
                verify(candidateService).getAllCandidates(any());
                assertEquals(500, mvcResult.getResponse().getStatus());
        }

        @Test
        void testGetCandidateById() throws Exception {
                UUID uuid = UUID.randomUUID();
                when(candidateService.getCandidateById(uuid)).thenReturn(getCandidate());
                MvcResult mvcResult = mockMvc
                                .perform(MockMvcRequestBuilders.get(Constant.CANDIDATE_ROUTE + "/" + uuid.toString()))
                                .andReturn();
                verify(candidateService).getCandidateById(uuid);
                assertEquals(200, mvcResult.getResponse().getStatus());
        }

        @Test
        void testGetCandidateReport() throws Exception {

                LocalDateTime startDate = LocalDateTime.now();
                when(candidateService.getCandidatesByReportBetweenDates(startDate, startDate))
                                .thenReturn(List.of(getCandidate()));
                ReportRequestBody reportRequestBody = new ReportRequestBody(startDate, startDate);

                MvcResult mvcResult = mockMvc
                                .perform(MockMvcRequestBuilders.post(Constant.CANDIDATE_ROUTE + Constant.REPORT)
                                                .content(mapToJson(reportRequestBody)).contentType("application/json"))
                                .andReturn();
                assertEquals(200, mvcResult.getResponse().getStatus());
        }

        @Test
        void testSaveCandidate() throws JsonProcessingException, Exception {
                NewCandidateRequest newCandidateRequest = new NewCandidateRequest("app", Adjudication.ADVERSE_ACTION,
                                "sdd",
                                LocalDate.now(), "dddd", "dddd", "dddd", "dddd", UUID.randomUUID(), "ddddd",
                                LocalDateTime.now(),
                                LocalDateTime.now(), 233);
                MvcResult mvcResult = mockMvc.perform(MockMvcRequestBuilders.post(Constant.CANDIDATE_ROUTE)
                                .content(mapToJson(newCandidateRequest)).contentType("application/json")).andReturn();
                assertEquals(201, mvcResult.getResponse().getStatus());

        }

        @Test
        void testUpdateCandidate() throws JsonProcessingException, Exception {
                UpdateCandidateRequest updateCandidateRequest = new UpdateCandidateRequest();
                updateCandidateRequest.setAdjudication(Adjudication.ADVERSE_ACTION);

                UUID uuid = UUID.randomUUID();

                MvcResult mvcResult = mockMvc
                                .perform(MockMvcRequestBuilders.patch(Constant.CANDIDATE_ROUTE + "/" + uuid.toString())
                                                .content(mapToJson(updateCandidateRequest))
                                                .contentType("application/json"))
                                .andReturn();

                assertEquals(200, mvcResult.getResponse().getStatus());

        }

        private Candidate getCandidate() {
                Candidate candidate = new Candidate(UUID.randomUUID(), "app", Adjudication.ADVERSE_ACTION,
                                "ddd", LocalDate.now(), "ddddddd", "ddddd", "ddddd", "dddddd", LocalDateTime.now(),
                                new Status(),
                                "dddd", LocalDateTime.now(), LocalDateTime.now(), 32);
                return candidate;
        }
}
