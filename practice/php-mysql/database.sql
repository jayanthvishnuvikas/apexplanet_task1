-- Task 1 MySQL practice: run in phpMyAdmin's SQL tab.
CREATE DATABASE IF NOT EXISTS task1_practice;
USE task1_practice;

CREATE TABLE IF NOT EXISTS learners (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO learners (full_name, email)
VALUES ('Demo Learner', 'demo@example.com');

-- Read
SELECT id, full_name, email, created_at FROM learners;

-- Update (change the email to a value not already in use)
UPDATE learners SET full_name = 'Updated Learner' WHERE id = 1;

-- Delete (uncomment only when you want to remove the demo row)
-- DELETE FROM learners WHERE id = 1;
