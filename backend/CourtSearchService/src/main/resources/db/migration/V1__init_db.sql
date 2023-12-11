CREATE TABLE court_search (
    id binary(16) PRIMARY KEY,
    search VARCHAR(255),
    status_id binary(16) REFERENCES checkr_bc_140_candidate.status(id),
    date datetime,
    candidate_id binary(16) REFERENCES checkr_bc_140_candidate.candidates(id)
);