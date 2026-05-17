CREATE DATABASE Asta_Black_Clover;
USE Asta_Black_Clover;

-- A criação de tabelas está organizada conforme da regra do négocio.

-- nomenclatura das Constraints
-- exp: c_Check_Quiz_qtd_descrisao
-- c - constraint, 
-- Check - tipo da constraint | inicia com letra maiuscula sempre,
-- Quiz -  tabela que a constraint esta sendo criada | inicia com letra maiuscula sempre,
-- qtd_descrisao - campo da tabela | tudo minuscula


/*
	Usuario e perm Schema
*/

CREATE TABLE permissao (
	id_permissao INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45)
);

INSERT INTO permissao (tipo) VALUES
	('admin'),
    ('user');

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    cpf CHAR(11) NOT NULL UNIQUE,
    email VARCHAR(100),
    senha VARCHAR(50) NOT NULL,
    dt_cadastro DATETIME DEFAULT NOW(),
    fk_permissao INT DEFAULT 2,
    CONSTRAINT cFk_Usuario_fk_permissao FOREIGN KEY (fk_permissao) REFERENCES permissao(id_permissao)
);

INSERT INTO usuario (nome, cpf, email, senha, fk_permissao) VALUES
    ('Administrador', '12345678910', 'caio_admin@email.com', '191012', 1);

/*
Quiz Schema
*/

CREATE TABLE quiz(
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descricao VARCHAR(250),
    qtd_questoes INT,
    dt_atualizacao DATETIME,
    CONSTRAINT c_Check_Quiz_qtd_questoes CHECK (qtd_questoes BETWEEN 0 AND 10)
);

CREATE TABLE resultado(
    id_resultado INT PRIMARY KEY AUTO_INCREMENT,
    pontuacao INT,
    fk_usuario INT,
    fk_quiz INT,
    CONSTRAINT cFk_Resultado_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT cFk_Resultado_fk_quiz FOREIGN KEY (fk_quiz) REFERENCES quiz(id_quiz)
);

CREATE TABLE questao(
	id_questao INT PRIMARY KEY AUTO_INCREMENT,
    questao VARCHAR(250),
    nivel_questao VARCHAR(50),
    fk_quiz INT,
    CONSTRAINT cCheck_Questao_nivel_questao CHECK (nivel_questao IN('Fácil', 'Médio', 'Difícil')),
    CONSTRAINT cFk_Questao_fk_quiz FOREIGN KEY (fk_quiz) REFERENCES quiz(id_quiz)
);

CREATE TABLE alternativa(
	id_alternativa INT PRIMARY KEY AUTO_INCREMENT,
    texto_alternativa VARCHAR(100),
    tipo TINYINT,
    fk_questao INT,
    CONSTRAINT cCheck_Alternativa_tipo CHECK (tipo IN('0', '1')),
    CONSTRAINT cFk_Alternativa_fk_questao FOREIGN KEY (fk_questao) REFERENCES questao(id_questao)
);

CREATE TABLE resposta_usuario(
	id_resposta INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT, 
    fk_alternativa INT,
    CONSTRAINT cFk_RespostaUsuario_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT cFk_RespostaUsuario_fk_alternativa FOREIGN KEY (fk_alternativa) REFERENCES alternativa(id_alternativa)
);

INSERT INTO quiz(nome, descricao, qtd_questoes, dt_atualizacao) VALUES
    ('GERAL', 'Quiz que abrange muitos temas do anime, como personagens, poderes, batalhas, relacionamentos, esquadrões e etc.', 5, NOW()),
    ('PODERES', 'Quiz que foca nos poderes apresentados no anime, suas caracteristicas e em quais batalhas foram usados.', 5, NOW()),
    ('PERSONAGENS', 'Quiz que foca nos personagens e suas interações no desenvolvimento da história.', 5, NOW());

INSERT INTO questao (questao, nivel_questao, fk_quiz) VALUES
    ('Quem é o protagonista que nasceu sem magia no reino de Clover, mas sonha em se tornar o Rei Mago?', 'Fácil', 1),
    ('Qual é o grande objetivo compartilhado por Asta e Yuno desde a infância, motivando a rivalidade entre os dois?', 'Fácil', 1),
    ('Qual é o nome do esquadrão dos Cavaleiros Mágicos ao qual Asta se junta?', 'Médio', 1),
    ('Qual personagem possui a magia do tempo e ocupa o cargo de Rei Mago no início da obra?', 'Médio', 1),
    ('Qual é o nome do demônio que habita o grimório de cinco folhas de Asta?', 'Difícil', 1),
    ('Qual tipo de magia permite controlar e criar água durante as batalhas?', 'Fácil', 2),
    ('Qual poder é capaz de anular ou cortar efeitos mágicos usando espadas especiais?', 'Fácil', 2),
    ('Qual tipo de magia é utilizada para manipular fios extremamente resistentes e precisos?', 'Médio', 2),
    ('Qual atributo mágico permite acelerar movimentos e ataques através do controle do espaço?', 'Médio', 2),
    ('Qual é o nome da energia utilizada pelos demônios para fortalecer feitiços e habilidades em Black Clover?', 'Difícil', 2),
    ('Qual personagem utiliza magia de corrente e costuma prender seus inimigos em batalha?', 'Fácil', 3),
    ('Qual integrante dos Touros Negros possui uma personalidade extremamente elétrica e usa magia de relâmpago?', 'Fácil', 3),
    ('Qual personagem do Reino Diamond teve seu corpo modificado artificialmente para aumentar seu poder mágico?', 'Médio', 3),
    ('Qual membro dos Touros Negros utiliza magia de transformação para assumir diferentes aparências?', 'Médio', 3),
    ('Qual líder do Olho do Sol da Meia-Noite compartilha o corpo com um elfo chamado Patolli?', 'Difícil', 3);

INSERT INTO alternativa (texto_alternativa, tipo, fk_questao) VALUES
    ('Yami', 0, 1),
    ('Asta', 1, 1),
    ('Luck', 0, 1),
    ('Finral', 0, 1),
    ('Derrotar os demônios', 0, 2),
    ('Derrotar os demônios', 0, 2),
    ('Controlar todos os grimórios', 0, 2),
    ('Se tornar o Rei Mago', 1, 2),
    ('Touros Negros', 1, 3),
    ('Leões Carmesins', 0, 3),
    ('Orcas Púrpuras', 0, 3),
    ('Alvorecer Dourado', 0, 3),
    ('Julius Novachrono', 1, 4),
    ('William Vangeance', 0, 4),
    ('Fuegoleon', 0, 4),
    ('Nozel Silva', 0, 4),
    ('Lucifero', 0, 5),
    ('Megicula', 0, 5),
    ('Zagred', 0, 5),
    ('Liebe', 1, 5),
    ('Magia de Água', 1, 6),
    ('Magia de Gelo', 0, 6),
    ('Magia de Névoa', 0, 6),
    ('Magia de Vapor', 0, 6),
    ('Anti-magia', 1, 7),
    ('Magia de Ferro', 0, 7),
    ('Magia Espacial', 0, 7),
    ('Magia de Luz', 0, 7),
    ('Magia de Fios', 1, 8),
    ('Magia de Aço', 0, 8),
    ('Magia de Papel', 0, 8),
    ('Magia de Planta', 0, 8),
    ('Magia Espacial', 1, 9),
    ('Magia do Tempo', 0, 9),
    ('Magia de Vento', 0, 9),
    ('Magia de Gravidade', 0, 9),
    ('Poder Demoníaco', 1, 10),
    ('Mana Negra', 0, 10),
    ('Aura Sombria', 0, 10),
    ('Energia Maldita', 0, 10),
    ('Sekke Bronzazza', 0, 11),
    ('Revchi Salik', 1, 11),
    ('Magna Swing', 0, 11),
    ('Gordon Agrippa', 0, 11),
    ('Luck Voltia', 1, 12),
    ('Finral Roulacase', 0, 12),
    ('Zora Ideale', 0, 12),
    ('Grey', 0, 12),
    ('Mars', 1, 13),
    ('Langris', 0, 13),
    ('Kaiser', 0, 13),
    ('Patolli', 0, 13),
    ('Grey', 1, 14),
    ('Charmy', 0, 14),
    ('Vanessa', 0, 14),
    ('Secre', 0, 14),
    ('Licht', 1, 15),
    ('Rhya', 0, 15),
    ('Vetto', 0, 15),
    ('Fana', 0, 15);
/*
Web-dat-vis Schema
*/

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	CONSTRAINT cFk_Aviso_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);


