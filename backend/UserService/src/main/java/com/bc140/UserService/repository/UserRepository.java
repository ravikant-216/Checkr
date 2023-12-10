package com.bc140.UserService.repository;

import com.bc140.UserService.dto.UserDTO;
import com.bc140.UserService.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;


@Repository
public interface UserRepository extends JpaRepository<User, UUID> {
    Optional<UserDTO> findByEmail(String email);
}
