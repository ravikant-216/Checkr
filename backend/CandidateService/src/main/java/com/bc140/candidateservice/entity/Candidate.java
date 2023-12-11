package com.bc140.candidateservice.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UuidGenerator;

import com.bc140.candidateservice.enums.Adjudication;

@Entity
@Table(name = "candidates")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Candidate {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @UuidGenerator
    private UUID id;

    @Column
    private String name;

    @Enumerated(EnumType.STRING)
    private Adjudication adjudication;

    @Column
    private String location;

    @Column
    private LocalDate dob;

    @Column(name = "phone_number")
    private String phoneNumber;

    private String zipcode;

    @Column(name = "social_security")
    private String socialSecurity;

    @Column(name = "drivers_license")
    private String driversLicense;

    @Column(name = "created_at", columnDefinition = "DATETIME")
    @CreationTimestamp
    private LocalDateTime createdAt;

    @JoinColumn(name = "status_id")
    @ManyToOne(cascade = { CascadeType.DETACH, CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH })
    private Status status;

    @Column
    private String packages;

    @Column(name = "report_created_at", columnDefinition = "DATETIME")
    private LocalDateTime reportCreatedAt;

    @Column(name = "report_completion_date", columnDefinition = "DATETIME")
    private LocalDateTime reportCompletionDate;

    @Column(name = "turn_around_time")
    private Integer turnAroundTime;
}
