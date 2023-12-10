package com.bc140.UserService.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

import java.util.UUID;


@Entity
@Data
@Table(name = "user")
public class User {
    @Id
    private UUID id;
    @Column
    private  String name;
    @Column
    private String email;
    @Column
    private  String password;
}
