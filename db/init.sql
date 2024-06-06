CREATE DATABASE IF NOT EXISTS sgg;
USE sgg;

CREATE TABLE IF NOT EXISTS Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Users (name, email) VALUES
('User1', 'user1@example.com'),
('User2', 'user2@example.com'),
('User3', 'user3@example.com'),
('User4', 'user4@example.com'),
('User5', 'user5@example.com'),
('User6', 'user6@example.com'),
('User7', 'user7@example.com'),
('User8', 'user8@example.com'),
('User9', 'user9@example.com'),
('User10', 'user10@example.com');
