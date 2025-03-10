CREATE DATABASE HackathonDB;
GO

USE HackathonDB;
GO

CREATE TABLE candidatos (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome NVARCHAR(255) NOT NULL,
    email NVARCHAR(255) NOT NULL,
    telefone NVARCHAR(50),
    github NVARCHAR(255),
    skills NVARCHAR(MAX),
    data_cadastro DATETIME DEFAULT GETDATE()
);
