
CREATE TABLE levels(
    player_id BIGSERIAL PRIMARY KEY,
   
    levels TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
