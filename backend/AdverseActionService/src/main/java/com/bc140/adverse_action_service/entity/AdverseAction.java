package com.bc140.adverse_action_service.entity;

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
@Table(name = "adverse_action")
public class AdverseAction {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "pre_notice_date")
    private Date preNoticeDate;

    @Column(name = "post_notice_date")
    private Date postNoticeDate;

    @Column(name = "status_id")
    private UUID statusId;
}
