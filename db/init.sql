CREATE TABLE airplanes (
    plane_id SERIAL PRIMARY KEY,
    plane_type  VARCHAR(40) NOT NULL,
    passenger_count INT NOT NULL
);