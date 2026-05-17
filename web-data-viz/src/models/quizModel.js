var database = require("../database/config");

function obterDadosQuiz(id_quiz) {
    
    var instrucaoSql = 
    `
        SELECT 
            qz.id_quiz,
            qz.nome AS nome_quiz,
            qz.qtd_questoes,
            qs.id_questao,
            qs.COUNT(id_questao) AS qtd_questoes
            qs.questao,
            qs.nivel_questao,
            qs.fk_quiz,
            alt.id_alternativa,
            alt.texto_alternativa AS alt_texto,
            alt.tipo,
            CASE
                WHEN alt.tipo = 0 THEN 'Incorreta'
                WHEN alt.tipo = 1 THEN 'Correta'
                ELSE 'Null(erro)'
            END AS tipo_alternativa,
            alt.fk_questao
            FROM quiz AS qz
                JOIN questao AS qs
                    ON qs.fk_quiz = qz.id_quiz
                JOIN alternativa AS alt
                    ON alt.fk_questao = qs.id_questao
            WHERE id_quiz = '${id_quiz}';

    `;

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