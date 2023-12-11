package com.bc140.court_search_service.repository;


import com.bc140.court_search_service.entity.CourtSearch;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CourtSearchRepository extends JpaRepository<CourtSearch, UUID> {
}
