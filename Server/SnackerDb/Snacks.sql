﻿CREATE TABLE [dbo].[Snacks]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(20) NOT NULL, 
    [Image] VARCHAR(MAX) NOT NULL
)
