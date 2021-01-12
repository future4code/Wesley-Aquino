APROFUNDAMENTO EM SQL

Exercício 1

a) Esse query remove da tabela Actor as informações de salário

b) Esse query muda o nome da coluna "gender" para "sex"

c) Aqui mantem-sea coluna com nome de "gender" porém altera-se o limite de caracteres da string.

d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100),

Exercício 2

a) UPDATE Actor
SET name ="Roberto Carlos", birth_date = "1999-10-10"
WHERE id = "03";

b) UPDATE Actor
SET name = "JULIANA PÃES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PÃES";

c) UPDATE Actor 
SET name = "Nicolas Cage", salary = 1000000, birth_date = "1970-05-25", gender = "male"
WHERE id = 03;

d) UPDATE Actor
SET hometown = "São Paulo"
WHERE id = "04";

Error Code: 1054. Unknown column 'hometown' in 'field list'

Nesta Query foi solicitado pra atualizar a coluna "hometown" que inexistente nessa tabela, por isso ele me informa o erro que a coluna "hometown" é desconhecida nessa lista.

Exercicio 3

a) DELETE FROM Actor WHERE name = "George Clooney"; obs.: Tinha criado a lista com outros atores

b) DELETE FROM Actor WHERE (gender = "male") AND (salary > 1000000);

Exercício 4

a) SELECT MAX(salary) FROM Actor;

b) SELECT MIN(salary) FROM Actor WHERE gender = "female"

c) SELECT COUNT(*) FROM Actor WHERE gender = "female";

d) SELECT SUM(salary) FROM Actor;

Exercício 5

a) Essa query conta os atores de acordo com  genero e agrupa, mostrando quantos são "male" e quantos são "female", através do GROUP BY "gender".

b) SELECT id, name FROM Actor ORDER BY name DESC;

c) SELECT * FROM Actor ORDER BY salary ASC;

d) SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender;

Exercicio 6

a) ALTER TABLE Movie ADD playing_limit_date DATE DEFAULT "2022-10-10";

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2021-01-10" WHERE id = "001";
   UPDATE Movie SET playing_limit_date = "2021-03-05" WHERE id = "002";

d) UPDATE Movie SET synopsis = "Em uma terra fantástica e única, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do mal. Para isso, o hobbit Frodo tem um caminho árduo pela frente, onde encontra perigo, medo e seres bizarros. Ao seu lado para o cumprimento desta jornada, ele aos poucos pode contar com outros hobbits, um elfo, um anão, dois humanos e um mago, totalizando nove seres que formam a Sociedade do Anel."
WHERE id = "003";

Ao excluir o filme exclui-se automaticamente a linha, fazendo com que ao tentar atualizar algo em uma linha que não existe ele responde que nenhuma linha foi afetada com essa mudança, o motivo é que a linha não existe mais.

Exercício 7

a) SELECT COUNT(*) FROM Movie WHERE rating > 7.5;

b) SELECT AVG(rating) FROM Movie;

c) SELECT COUNT(*) FROM Movie WHERE playing_limit_date >= "2021-01-12";

d) SELECT COUNT(*) FROM Movie WHERE date_movie > "2021-01-12";

e) SELECT MAX(rating) FROM Movie;

f) SELECT MIN(rating) FROM Movie;








