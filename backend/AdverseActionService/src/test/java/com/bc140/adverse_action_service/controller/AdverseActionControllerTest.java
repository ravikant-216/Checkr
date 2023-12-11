package com.bc140.adverse_action_service.controller;

import com.bc140.adverse_action_service.dto.AdverseActionDTO;
import com.bc140.adverse_action_service.service.AdverseActionService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Collections;
import java.util.Date;
import java.util.UUID;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class AdverseActionControllerTest {

    @Mock
    private AdverseActionService adverseActionService;

    @InjectMocks
    private AdverseActionController adverseActionController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(adverseActionController).build();
    }

    @Test
    void testGetAllCandidates() throws Exception {
        when(adverseActionService.getAllCandidates()).thenReturn(Collections.emptyList());

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/v1/userActions"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andReturn();

    }

    @Test
    void testSaveAdverseAction() throws Exception {
        AdverseActionDTO mockAdverseAction = new AdverseActionDTO();
        mockAdverseAction.setId(UUID.randomUUID());
        mockAdverseAction.setName("John Doe");
        mockAdverseAction.setPreNoticeDate(new Date());
        mockAdverseAction.setPostNoticeDate(new Date());
        mockAdverseAction.setStatusId(UUID.randomUUID());

        when(adverseActionService.saveAdverseAction(any(AdverseActionDTO.class))).thenReturn(mockAdverseAction);

        String jsonPayload = "{\"name\":\"John Doe\",\"preNoticeDate\":\"2023-12-08\",\"postNoticeDate\":\"2023-12-09\",\"statusId\":\"" + UUID.randomUUID() + "\"}";
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/v1/userActions")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(jsonPayload))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").exists()) // Adjust this based on your actual JSON structure
                .andExpect(jsonPath("$.name").value("John Doe"))
                .andExpect(jsonPath("$.preNoticeDate").exists()) // Adjust this based on your actual JSON structure
                .andExpect(jsonPath("$.postNoticeDate").exists()) // Adjust this based on your actual JSON structure
                .andExpect(jsonPath("$.statusId").exists()) // Adjust this based on your actual JSON structure
                .andReturn();

    }


}
