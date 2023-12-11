package com.bc140.adverse_action_service.repository;


import com.bc140.adverse_action_service.entity.AdverseAction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdverseActionRepository extends JpaRepository<AdverseAction, UUID> {
}
