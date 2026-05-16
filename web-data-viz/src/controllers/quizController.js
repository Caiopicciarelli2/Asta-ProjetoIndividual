var quizModel = require("../models/quizModel");

function obterDadosQuiz(){
    quizModel.obterDadosQuiz()
    .then(function (resultado) {

        if (resultado.length > 0) {
            res.status(403).send("");
        }
        else {
            
        }
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });
}

function resultadoQuiz(){
    quizModel.resultadoQuiz()
    .then(function (resultado) {

        if (resultado.length > 0) {
            res.status(403).send("");
        }
        else {
            
        }
    })
    .catch(function (erro) {
        console.log(erro);
        res.status(500).json(erro);
    });
}


module.exports = {
    obterDadosQuiz,
    resultadoQuiz
}