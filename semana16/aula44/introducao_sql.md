Exercício 1

a) CREATE TABLE: cria ma nova tabela
   PRIMARY KEY: é um identificador único 
   VARCHAR(): recebe uma string e pode receber um parâmetro para a quantidade limite de caracteres
   FLOAT: recebe um número decimal
   DATE: recebe uma data no padrão yyyy/mm/dd

b) SHOW DATABASES: mostra os bancos de dados 
   SHOW TABLES: mostra as tabelas do banco de dados

c) DESCRIBE actors: mostra a forma como a tabela está estruturada e os detalhes com id, name, salary, birth_date e gender.

Exercício 2

a) INSERT INTO actors (id, name, salary, birth_date, gender)
VALUES (
   "01",
   "Silvester Stalone",
   500000,
   "1950-06-10"
   "male"
);

b) Com a chave PRIMARY KEY no id ele não aceita que se adicione outro item à tabela porque deve haver um id unico no bando de dados. Error Code: 1062. Duplicate entry '01' for key 'PRIMARY' => A tradução é: entrada duplicada 'x'

c) Error Code: 1136. Column count doesn't match value count at row 1: A quantidade de colunas não corresponde a quantidade de parâmetros na linha 1.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"03", 
"Fernanda Montenegro", 
300000, 
"1929-10-19", 
"female"
);

d) Error Code: 1364. Field 'name' doesn't have a default value: A chave name não foi declarada.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"04",
"George Clooney",
400000,
"1929-10-19", 
"female"
);

e) Error Code: 1292. Incorrect date value: '1900' for column 'birth_date' at row 1: Os dados de data de nascimento não foram declarados como string.

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"05",
"Juliana Paes",
719333.33,
"1929-10-19", 
"female"
);

f) INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES (
"09",
"Angelina Jolie",
3000000,
"1975-10-19", 
"male"
);

Exercício 3

a) SELECT salary FROM Actor WHERE name = "Angelina Jolie"

b) SELECT salary FROM Actor WHERE name = "Angelina Jolie"

c) SELECT id, name, salary, birth_date FROM Actor WHERE gender = "invalid" Não retorna nenhuma informação porque não há o gender "invalid" cadastrado no DB.

d) SELECT id, name, salary FROM Actor WHERE salary <= 500000

e) Error Code: 1054. Unknown column 'nome' in 'field list' Coluna "nome" desconhecida
   Correção: SELECT id, name from Actor WHERE id = "03";

Exercicio 4

a) A Query busca em todos os atores os que começam com A ou J utilizando a % e o salário maior que 300000 atraves do > 300000

b) SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000

c) SELECT * FROM Actor
WHERE name LIKE "%g%" OR name LIKE "%G%";

d) SELECT * FROM Actor
WHERE (name LIKE "%a%" OR name LIKE "%A%" OR name LIKE "%g%" OR name LIKE "%G%") 
AND salary BETWEEN 3500000 AND 900000;

Exercicio 5

a) CREATE TABLE Movie (
id VARCHAR(255) PRIMARY KEY,
name VARCHAR(255) NOT NULL,
synopsis TEXT NOT NULL,
date_movie DATE NOT NULL,
rating INT NOT NULL
)

b) INSERT INTO Movie (id, name, synopsis, date_movie, rating)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006-01-06",
"7"
);

c) INSERT INTO Movie (id, name, synopsis, date_movie, rating)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012-12-27",
"10"
);

d) INSERT INTO Movie ( id, name, synopsis, date_movie, rating)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
"2017/11/02",
8
);

e) INSERT INTO Movie (id, name, synopsis, date_movie, rating)
VALUES (
"004",
"Tropa de Elite",
"O capitão da força especial da Polícia Militar do Rio de Janeiro treina dois recrutas novatos para que possam sucedê-lo.",
"2007-10-05",
"9"
);














