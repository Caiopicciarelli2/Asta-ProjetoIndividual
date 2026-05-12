var database = require("../database/config");

function buscarUltimasMedidas(limite_linhas) {

    var instrucaoSql = 
    `
        SELECT 
            DATE_FORMAT(u.dt_cadastro, '%d/%m') AS momento_grafico,
            COUNT(DISTINCT u.id_usuario) AS qtd_usuarios,
            COUNT(DISTINCT r.id_resultado) AS qtd_quiz
        FROM usuario u
            LEFT JOIN resultado r
                ON u.id_usuario = r.fk_usuario
        GROUP BY DATE_FORMAT(u.dt_cadastro, '%d/%m')
        ORDER BY DATE_FORMAT(u.dt_cadastro, '%d/%m') DESC LIMIT ${limite_linhas};
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal() {

    var instrucaoSql = `
        SELECT 
            DATE_FORMAT(u.dt_cadastro, '%d/%m') AS momento_grafico,
            COUNT(DISTINCT u.id_usuario) AS qtd_usuarios,
            COUNT(DISTINCT r.id_resultado) AS qtd_quiz
        FROM usuario u
            LEFT JOIN resultado r
                ON u.id_usuario = r.fk_usuario
        GROUP BY DATE_FORMAT(u.dt_cadastro, '%d/%m')
        ORDER BY DATE_FORMAT(u.dt_cadastro, '%d/%m') DESC LIMIT 1;
    `;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);

    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}
