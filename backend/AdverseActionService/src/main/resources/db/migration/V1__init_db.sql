CREATE TABLE adverse_action (
    id binary(16) PRIMARY KEY,
    name VARCHAR(255),
    pre_notice_date datetime,
    post_notice_date datetime,
    status_id binary(16) REFERENCES checkr_bc_140_candidate.status(id)
);
