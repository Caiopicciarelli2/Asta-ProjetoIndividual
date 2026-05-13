var dashModel = require("../models/dashModel");

// semanal
function buscarDadosDashSemanal(req, res) {

    const limite_linhas_semanal = 7;
    console.log(`Recuperando as ultimas ${limite_linhas_semanal} medidas`);

    dashModel.buscarDadosDashSemanal(limite_linhas_semanal).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function AtualizarDadosDashSemanal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    dashModel.AtualizarDadosDashSemanal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

//mensal

function buscarDadosDashMensal(req, res) {

    const limite_linhas_Mensal = 12;

    console.log(`Recuperando as ultimas ${limite_linhas_Mensal} medidas`);

    dashModel.buscarDadosDashMensal(limite_linhas_Mensal).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function AtualizarDadosDashMensal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    dashModel.AtualizarDadosDashMensal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function obterKPIs(req, res) {

    // kpis
    dashModel.obterKPIs().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarDadosDashSemanal,
    AtualizarDadosDashSemanal,
    buscarDadosDashMensal,
    AtualizarDadosDashMensal,
    obterKPIs
}