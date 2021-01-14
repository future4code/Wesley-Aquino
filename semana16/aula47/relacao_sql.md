# Exercício 1

* a) Uma FOREIGN KEY é um chama que referencia os dados de uma tabela a outra tabela diferente para que os dados possam ser visualizados juntos em alguma ocasião.

* b) 
```
INSERT INTO rating (id, comment, rate, movie_id) VALUE 
(1, "Esse filme é muito legal!", 9.5, "001"),
(2, "Esse filme é chato demais!", 4.7, "002"),
(3, "É um filme razoável", 6.5, "004"); 
```

* c) Não é possível porque o id não existe e o banco não consegue referenciar aquela inserção a ninguém, ele precisa de um id válido.
```
INSERT into rating (id, comment, rate, movie_id) value
(4, "Divertido", 7, "003");
```
Erro: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails.

* d) 
``` 
ALTER TABLE Movie DROP COLUMN rating; 
```

* e) 
``` 
DELETE FROM Movie WHERE id = "004";
```
Ele não permite excluir um elemento que esteja linkado a outro elemento de outra tabela.

# Exercício 2

* a)  Essa tabela relaciona o filme com o ator que participou dele.

* b) 
```
INSERT INTO MovieCast(movie_id, actor_id) VALUE
("001", "01"),
("001", "03"),
("002", "05"),
("002", "01"),
("004", "03"),
("004", "06");
```
* c) Ele cai no seguinte erro: Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails. Não pode adicionar nada a uma coluna inexistente.
```
INSERT INTO MovieCast(movie_id, actor_id) VALUE
("003", "01");
```

* d) DELETE FROM Actor WHERE id = "01";

Não é possivel excluir um elemento que foi referenciado em outra tabela.


