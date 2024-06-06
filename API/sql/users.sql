CREATE TABLE users (
    player_id BIGSERIAL PRIMARY KEY,
    firstName VARCHAR(500),
    lastName VARCHAR(500),
    Pasword VARCHAR(500) NOT NULL,
    userName TEXT,
    gender TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
