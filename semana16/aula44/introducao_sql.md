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







