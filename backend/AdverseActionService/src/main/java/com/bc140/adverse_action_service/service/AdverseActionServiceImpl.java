package com.bc140.adverse_action_service.service;

import com.bc140.adverse_action_service.dto.AdverseActionDTO;
import com.bc140.adverse_action_service.entity.AdverseAction;
import com.bc140.adverse_action_service.exception.AdverseActionNotFoundException;
import com.bc140.adverse_action_service.repository.AdverseActionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdverseActionServiceImpl implements AdverseActionService {

    private final AdverseActionRepository adverseActionRepository;
    private final ModelMapper modelMapper;

    @Autowired
    public AdverseActionServiceImpl(AdverseActionRepository adverseActionRepository, ModelMapper modelMapper) {
        this.adverseActionRepository = adverseActionRepository;
        this.modelMapper = modelMapper;
    }

    @Override
    public List<AdverseActionDTO> getAllCandidates() {
        List<AdverseAction> adverseActionList = adverseActionRepository.findAll();
        if (adverseActionList.isEmpty()) {
            throw new AdverseActionNotFoundException("No Candidates with Adverse Action");
        }
        return adverseActionList.stream()
                .map(this::entityToDto)
                .toList();
    }

    @Override
    public AdverseActionDTO saveAdverseAction(AdverseActionDTO adverseActionDTO) {
        AdverseAction adverseAction = dtoToEntity(adverseActionDTO);
        adverseActionRepository.save(adverseAction);
        return entityToDto(adverseAction);
    }

    private AdverseActionDTO entityToDto(AdverseAction adverseAction) {
        return modelMapper.map(adverseAction, AdverseActionDTO.class);
    }

    private AdverseAction dtoToEntity(AdverseActionDTO adverseAction) {
        return modelMapper.map(adverseAction, AdverseAction.class);
    }
}
