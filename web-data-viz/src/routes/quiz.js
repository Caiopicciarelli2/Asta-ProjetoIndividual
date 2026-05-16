var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/pegarDados/quiz", function (req, res) {
    quizController.pegarDados(req, res);
})

router.get("/cadastrar/resultado", function (req, res) {
    quizController.cadastrarDados(req, res);
})

module.exports = router;