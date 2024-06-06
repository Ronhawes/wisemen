
CREATE TABLE comments(
    player_id BIGSERIAL PRIMARY KEY,
    commentor_id BIGINT references users(id) on delete cascade,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)