var database = require("../database/config");

function pegarDados() {
    
    var instrucaoSql = ``;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarDados() {
    
    var instrucaoSql = ``;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    pegarDados,
    cadastrarDados
};