CREATE TABLE candidates (
    id BINARY(16) PRIMARY KEY,
    name VARCHAR(255),
    adjudication VARCHAR(50),
    location VARCHAR(255),
    date datetime,
    email VARCHAR(255),
    dob datetime,
    phone_number VARCHAR(20),
    zipcode VARCHAR(20),
    social_security VARCHAR(20),
    driver_license VARCHAR(20),
    created_at datetime,
    package VARCHAR(50),
    report_created_at datetime,
    report_completion_date datetime,
    turn_around_time INT
);

CREATE TABLE status (
    id binary(16) PRIMARY KEY,
    status VARCHAR(50)
);
