
begin tran

declare @snackId uniqueidentifier = newid()

insert into Snacks(id, name,image) values(@snackId, 'Açaí', 'https://cdn.awsli.com.br/800x800/163/163535/produto/6024236/de8940b4fa.jpg')


insert into Flavors(id, name, PreparationTime, snackId) 
values
	(newid(), 'Morango', 0, @snackId),
	(newid(), 'Banana', 0, @snackId),
	(newid(), 'Kiwi', 3000000000, @snackId)

	insert into measures(id, size, price, preparationtime, description, snackId)
	values
		(NEWID(), 'Pequeno', 10, 3000000000, '300ml', @snackId),
		(NEWID(), 'Médio', 13, 4200000000, '500ml', @snackId),
		(NEWID(), 'Grande', 15, 6000000000 , '700ml', @snackId)


		insert into Additional (id, name, AdditionalPrice, preparationTime,snackId)
		values
			(newid(), 'Leite Ninho', 3, 0, @snackId),
			(newid(), 'Granola', 0, 0, @snackId),
			(newid(), 'Paçoca', 3, 1800000000, @snackId)

			commit