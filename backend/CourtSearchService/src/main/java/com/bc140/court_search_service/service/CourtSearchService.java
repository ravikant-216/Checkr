package com.bc140.court_search_service.service;

import com.bc140.court_search_service.dto.CourtSearchDTO;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CourtSearchService {
    List<CourtSearchDTO> getAllCourtSearches();

}
