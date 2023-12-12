package com.bc140.court_search_service.service.impl;

import com.bc140.court_search_service.dto.CourtSearchDTO;
import com.bc140.court_search_service.entity.CourtSearch;
import com.bc140.court_search_service.exception.CourtSearchNotFoundException;
import com.bc140.court_search_service.repository.CourtSearchRepository;
import com.bc140.court_search_service.service.CourtSearchService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourtSearchServiceImpl implements CourtSearchService {

    private final CourtSearchRepository courtSearchRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public CourtSearchServiceImpl(CourtSearchRepository courtSearchRepository, ModelMapper modelMapper) {
        this.courtSearchRepository = courtSearchRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<CourtSearchDTO> getAllCourtSearches() {
        List<CourtSearch> courtSearchList = courtSearchRepository.findAll();
        if (courtSearchList.isEmpty()) {
            throw new CourtSearchNotFoundException("No Candidates with court searches");
        }
        return courtSearchList.stream()
                .map(this::entityToDto)
                .toList();
    }

    private CourtSearchDTO entityToDto(CourtSearch courtSearch) {
        return modelMapper.map(courtSearch, CourtSearchDTO.class);
    }

}
