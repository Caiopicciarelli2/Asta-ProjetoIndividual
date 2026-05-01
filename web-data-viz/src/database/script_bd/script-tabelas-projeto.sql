CREATE DATABASE Asta_Black_Clover;
USE Asta_Black_Clover;

-- A criação de tabelas está organizada conforme da regra do négocio.

-- nomenclatura das Constraints
-- exp: c_Check_Quiz_qtd_descrisao
-- c - constraint, 
-- Check - tipo da constraint | inicia com letra maiuscula sempre,
-- Quiz -  tabela que a constraint esta sendo criada | inicia com letra maiuscula sempre,
-- qtd_descrisao - campo da tabela | tudo minuscula

CREATE TABLE usuario(
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    cpf CHAR(11) NOT NULL UNIQUE,
    email VARCHAR(100),
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE quiz(
	id_quiz INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    descrisao VARCHAR(250),
    qtd_questoes INT,
    dt_atualizacao DATETIME,
    CONSTRAINT c_Check_Quiz_qtd_descrisao CHECK (qtd_questoes BETWEEN 0 AND 10)
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
    fk_questao INT,
    fk_alternativa INT,
    CONSTRAINT cFk_RespostaUsuario_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT cFk_RespostaUsuario_fk_questao FOREIGN KEY (fk_questao) REFERENCES questao(id_questao),
    CONSTRAINT cFk_RespostaUsuario_fk_alternativa FOREIGN KEY (fk_alternativa) REFERENCES alternativa(id_alternativa)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	CONSTRAINT cFk_Aviso_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE permissao (
	id_permissao INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(45) DEFAULT 'user',
    fk_usuario INT,
    CONSTRAINT cFk_Permissao_fk_usuario FOREIGN KEY (fk_usuario) REFERENCES usuario(id_usuario),
    CONSTRAINT cCheck_Permissao_tipo CHECK (tipo IN('user', 'admin'))
);


