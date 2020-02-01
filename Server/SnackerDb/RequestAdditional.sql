CREATE TABLE [dbo].[RequestAdditional]
(
	[RequestId] UNIQUEIDENTIFIER NOT NULL , 
    [AdditionalId] UNIQUEIDENTIFIER NOT NULL, 
    PRIMARY KEY ([RequestId], [AdditionalId])
)
