DROP TABLE IF EXISTS artwork CASCADE;
CREATE TABLE artwork(
    artwork_id SERIAL PRIMARY KEY NOT NULL,
    artwork_name VARCHAR(255),
    file_data BYTEA,
    users_id INTEGER REFERENCES users(user_id)
);