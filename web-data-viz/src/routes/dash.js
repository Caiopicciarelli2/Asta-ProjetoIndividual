var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/ultimas/geral-semanal", function (req, res) {
    dashController.buscarDadosDashSemanal(req, res);
});

router.get("/tempo-real/geral-semanal", function (req, res) {
    dashController.AtualizarDadosDashSemanal(req, res);
})

router.get("/ultimas/geral-mensal", function (req, res) {
    dashController.buscarDadosDashMensal(req, res);
});

router.get("/tempo-real/geral-mensal", function (req, res) {
    dashController.AtualizarDadosDashMensal(req, res);
})

module.exports = router;