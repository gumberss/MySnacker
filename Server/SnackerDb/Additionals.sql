CREATE TABLE [dbo].[Additionals]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Name] VARCHAR(20) NOT NULL, 
    [AdditionalPrice] DECIMAL(12, 2) NOT NULL, 
    [AdditionalTime] BIGINT NOT NULL, 
    [SnackId] UNIQUEIDENTIFIER NOT NULL,
    
)
