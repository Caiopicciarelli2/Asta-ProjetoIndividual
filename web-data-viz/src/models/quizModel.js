var database = require("../database/config");

function obterDadosQuiz() {
    
    var instrucaoSql = `SELECT`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function resultadoQuiz() {
    
    var instrucaoSql = `INSERT`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    obterDadosQuiz,
    resultadoQuiz
};