package com.bc140.adverse_action_service.controller;

import com.bc140.adverse_action_service.dto.AdverseActionDTO;
import com.bc140.adverse_action_service.service.AdverseActionService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@Slf4j
@RequestMapping("/v1/userActions")
public class AdverseActionController {

    private final AdverseActionService adverseActionService;

    @Autowired
    public AdverseActionController(AdverseActionService adverseActionService) {
        this.adverseActionService = adverseActionService;
    }

    @GetMapping
    public List<AdverseActionDTO> getAllCandidates() {
        return adverseActionService.getAllCandidates();
    }

    @PostMapping
    public AdverseActionDTO saveAdverseAction(@RequestBody AdverseActionDTO adverseActionDTO) {
        return adverseActionService.saveAdverseAction(adverseActionDTO);
    }
}