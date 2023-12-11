package com.bc140.adverse_action_service.service;

import com.bc140.adverse_action_service.dto.AdverseActionDTO;

import java.util.List;

public interface AdverseActionService {
    List<AdverseActionDTO> getAllCandidates();

    AdverseActionDTO saveAdverseAction(AdverseActionDTO adverseActionDTO);
}
