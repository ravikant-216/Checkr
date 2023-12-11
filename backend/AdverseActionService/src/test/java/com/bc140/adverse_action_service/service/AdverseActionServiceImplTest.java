package com.bc140.adverse_action_service.service;

import com.bc140.adverse_action_service.dto.AdverseActionDTO;
import com.bc140.adverse_action_service.entity.AdverseAction;
import com.bc140.adverse_action_service.exception.AdverseActionNotFoundException;
import com.bc140.adverse_action_service.exception.ErrorResponse;
import com.bc140.adverse_action_service.exception.GlobalExceptionHandler;
import com.bc140.adverse_action_service.repository.AdverseActionRepository;
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

class AdverseActionServiceImplTest {

    @Mock
    private AdverseActionRepository adverseActionRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private AdverseActionServiceImpl adverseActionService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllCandidates() {
        AdverseAction adverseAction = new AdverseAction(UUID.randomUUID(), "John Doe", new Date(), new Date(), UUID.randomUUID());
        List<AdverseAction> adverseActionList = Collections.singletonList(adverseAction);

        when(adverseActionRepository.findAll()).thenReturn(adverseActionList);
        when(modelMapper.map(any(), eq(AdverseActionDTO.class))).thenReturn(new AdverseActionDTO());

        List<AdverseActionDTO> result = adverseActionService.getAllCandidates();

        assertEquals(1, result.size());
        verify(adverseActionRepository, times(1)).findAll();
        verify(modelMapper, times(1)).map(any(), eq(AdverseActionDTO.class));
    }

    @Test
    void testGetAllCandidatesEmptyList() {
        when(adverseActionRepository.findAll()).thenReturn(Collections.emptyList());

        assertThrows(AdverseActionNotFoundException.class, () -> adverseActionService.getAllCandidates());
        AdverseActionNotFoundException adverseActionGlobalException = new AdverseActionNotFoundException("No Candidates with Adverse Action");

        verify(adverseActionRepository, times(1)).findAll();
        GlobalExceptionHandler exceptionHandlers = new GlobalExceptionHandler();
        ResponseEntity<ErrorResponse> response = exceptionHandlers.handleException(adverseActionGlobalException);
        assertEquals(HttpStatus.NOT_FOUND.value(),response.getStatusCode().value());
    }

    @Test
    void testSaveAdverseAction() {
        // Arrange
        AdverseActionDTO adverseActionDTO = new AdverseActionDTO();
        adverseActionDTO.setId(UUID.randomUUID());
        adverseActionDTO.setName("John Doe");
        adverseActionDTO.setPreNoticeDate(new Date());
        adverseActionDTO.setPostNoticeDate(new Date());
        adverseActionDTO.setStatusId(UUID.randomUUID());

        AdverseAction adverseAction = new AdverseAction();

        when(modelMapper.map(any(AdverseActionDTO.class), eq(AdverseAction.class))).thenReturn(adverseAction);
        when(adverseActionRepository.save(adverseAction)).thenReturn(adverseAction);

        adverseActionService.saveAdverseAction(adverseActionDTO);

        verify(adverseActionRepository, times(1)).save(adverseAction);
        verify(modelMapper, times(1)).map(any(AdverseActionDTO.class), eq(AdverseAction.class));
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
        assertEquals(time,errorResponse.getTimeStamp());
    }
}
