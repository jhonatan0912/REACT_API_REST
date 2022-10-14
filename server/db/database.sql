CREATE DATABASE IF NOT EXISTS companydb;

INSERT INTO `companydb`.`employee`
(`idEmployee`,
`name`,
`salary`)
VALUES
(1,
'Joe',
1000),
(2,
'Henry',
2000),
(3,
'Sam',
2500),
(4,
'Max',
1500);


SELECT * FROM employee WHERE idEmployee=1;

DELETE FROM employee WHERE idEmployee=2;