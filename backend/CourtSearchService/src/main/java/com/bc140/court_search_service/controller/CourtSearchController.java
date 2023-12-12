package com.bc140.court_search_service.controller;

import com.bc140.court_search_service.dto.CourtSearchDTO;
import com.bc140.court_search_service.service.CourtSearchService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/v1/courtReports")
public class CourtSearchController {

    private final CourtSearchService courtSearchService;

    @Autowired
    public CourtSearchController(CourtSearchService courtSearchService) {
        this.courtSearchService = courtSearchService;
    }

    @GetMapping
    public List<CourtSearchDTO> getAllCourtSearches() {
        return courtSearchService.getAllCourtSearches();
    }

}