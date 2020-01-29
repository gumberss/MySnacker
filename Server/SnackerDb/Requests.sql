CREATE TABLE [dbo].[Requests]
(
	[Id] UNIQUEIDENTIFIER NOT NULL PRIMARY KEY, 
    [MeasureId] UNIQUEIDENTIFIER NOT NULL, 
    [FlavorId] UNIQUEIDENTIFIER NOT NULL, 
	[SnackId] UNIQUEIDENTIFIER NOT NULL, 
    [PreparationTime] BIGINT NOT NULL,
    CONSTRAINT FK_Request_Measure FOREIGN KEY (MeasureId)
    REFERENCES Measures(Id),
		CONSTRAINT FK_Request_Flavor FOREIGN KEY (FlavorId)
    REFERENCES Flavors(Id)
)
