package com.bc140.court_search_service.controller;

import com.bc140.court_search_service.service.CourtSearchService;
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
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class CourtSearchControllerTest {


    @Mock
    private CourtSearchService courtSearchService;

    @InjectMocks
    private CourtSearchController courtSearchController;

    private MockMvc mockMvc;

    @BeforeEach
    public void setUp() {
        MockitoAnnotations.openMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(courtSearchController).build();
    }

    @Test
    void testGetAllCandidates() throws Exception {
        when(courtSearchService.getAllCourtSearches()).thenReturn(Collections.emptyList());

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/v1/courtReports"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andReturn();

    }
}