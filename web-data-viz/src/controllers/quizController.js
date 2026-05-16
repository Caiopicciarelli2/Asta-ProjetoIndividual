var quizModel = require("../models/quizModel");

function pegarDados(){
    quizModel.pegarDados()
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

function cadastrarDados(){
    quizModel.cadastrarDados()
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
    pegarDados,
    cadastrarDados
}