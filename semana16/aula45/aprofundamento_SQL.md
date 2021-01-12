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






