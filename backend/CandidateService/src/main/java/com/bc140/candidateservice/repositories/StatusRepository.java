package com.bc140.candidateservice.repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bc140.candidateservice.entity.Status;

public interface StatusRepository extends JpaRepository<Status, UUID> {

}
