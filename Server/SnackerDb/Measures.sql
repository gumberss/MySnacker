CREATE TABLE [dbo].[Measures]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [Size] VARCHAR(20) NOT NULL, 
    [Price] DECIMAL(12, 2) NOT NULL, 
    [PreparationTime] BIGINT NOT NULL, 
    [Description] VARCHAR(20) NULL, 
    [SnackId] UNIQUEIDENTIFIER NOT NULL,
	CONSTRAINT FK_Measure_Snack FOREIGN KEY (SnackId)
    REFERENCES Snacks(Id)
)
