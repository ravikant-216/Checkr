CREATE TABLE adverse_action (
    id binary(16) PRIMARY KEY,
    name VARCHAR(255),
    status VARCHAR(50),
    pre_notice_date datetime,
    post_notice_date datetime
);