
CREATE TABLE comments(
    id BIGSERIAL PRIMARY KEY,
    commentor_id BIGINT references players(id) on delete cascade,
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)