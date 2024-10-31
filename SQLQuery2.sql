CREATE TABLE users (
    id INT IDENTITY(1,1) PRIMARY KEY, -- IDENTITY for auto-incrementing
    username NVARCHAR(50) NOT NULL,
    email NVARCHAR(100) NOT NULL,
    password NVARCHAR(255) NOT NULL
);


