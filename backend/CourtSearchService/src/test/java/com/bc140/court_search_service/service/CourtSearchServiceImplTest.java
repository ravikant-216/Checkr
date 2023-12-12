package com.bc140.court_search_service.service;

import com.bc140.court_search_service.dto.CourtSearchDTO;
import com.bc140.court_search_service.entity.CourtSearch;
import com.bc140.court_search_service.exception.CourtSearchNotFoundException;
import com.bc140.court_search_service.exception.ErrorResponse;
import com.bc140.court_search_service.exception.GlobalExceptionHandler;
import com.bc140.court_search_service.repository.CourtSearchRepository;
import com.bc140.court_search_service.service.impl.CourtSearchServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class CourtSearchServiceImplTest {

    @Mock
    private CourtSearchRepository courtSearchRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private CourtSearchServiceImpl courtSearchService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllCandidates() {
        CourtSearch courtSearch = new CourtSearch(UUID.randomUUID(), "John Doe", UUID.randomUUID(), new Date(), UUID.randomUUID());
        List<CourtSearch> courtSearchList = Collections.singletonList(courtSearch);

        when(courtSearchRepository.findAll()).thenReturn(courtSearchList);
        when(modelMapper.map(any(), eq(CourtSearchDTO.class))).thenReturn(new CourtSearchDTO());

        List<CourtSearchDTO> result = courtSearchService.getAllCourtSearches();

        assertEquals(1, result.size());
        verify(courtSearchRepository, times(1)).findAll();
        verify(modelMapper, times(1)).map(any(), eq(CourtSearchDTO.class));
    }

    @Test
    void testGetAllCandidatesEmptyList() {
        when(courtSearchRepository.findAll()).thenReturn(Collections.emptyList());

        assertThrows(CourtSearchNotFoundException.class, () -> courtSearchService.getAllCourtSearches());
        CourtSearchNotFoundException courtSearchGlobalException = new CourtSearchNotFoundException("No Candidates with Adverse Action");

        verify(courtSearchRepository, times(1)).findAll();
        GlobalExceptionHandler exceptionHandlers = new GlobalExceptionHandler();
        ResponseEntity<ErrorResponse> response = exceptionHandlers.handleException(courtSearchGlobalException);
        assertEquals(HttpStatus.NOT_FOUND.value(), response.getStatusCode().value());
    }

    @Test
    void testErrorResponse() {
        ErrorResponse errorResponse = new ErrorResponse();
        Long time = System.currentTimeMillis();
        errorResponse.setStatus(404);
        errorResponse.setMessage("Not Found");
        errorResponse.setTimeStamp(time);

        assertEquals(404, errorResponse.getStatus());
        assertEquals("Not Found", errorResponse.getMessage());
        assertEquals(time, errorResponse.getTimeStamp());
    }
}