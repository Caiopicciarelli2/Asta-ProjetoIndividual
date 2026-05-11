var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    var instrucaoSql = 
    `
        SELECT 
            DATE_FORMAT(u.dt_cadastro, '%H:%i:%s') AS momento_grafico,
            COUNT(DISTINCT u.id_usuario) AS qtd_usuarios,
            COUNT(r.id_resultado) AS qtd_quiz
        FROM usuario AS u
            LEFT JOIN resultado AS r
                ON u.id_usuario = r.fk_usuario
        GROUP BY momento_grafico
        ORDER BY momento_grafico DESC
        LIMIT ${limite_linhas};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(u.dt_cadastro, '%y%d/%m %H:%i') AS momento_grafico,
            COUNT(DISTINCT u.id_usuario) AS qtd_usuarios,
            COUNT(r.id_resultado) AS qtd_quiz
        FROM usuario AS u
            LEFT JOIN resultado AS r
                ON u.id_usuario = r.fk_usuario;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
