package com.bc140.court_search_service.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "court_search")
public class CourtSearch {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "search")
    private String search;

    @Column(name = "status_id")
    private UUID statusId;

    @Column(name = "date")
    private Date date;

    @Column(name = "candidate_id")
    private UUID candidateId;

}
