var quizModel = require("../models/quizModel");

function obterDadosQuiz(req, res){
    let id_quiz = req.params.id_quiz;

    quizModel.obterDadosQuiz(id_quiz)
    .then(function (resultado) {

        if (resultado.length > 0) {
            console.log(resultado);
            res.status(200).json(resultado);
        }
        else {
            res.status(204).send("Nenhum resultado encontrado!");
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