var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/quiz/:id_quiz", function (req, res) {
    quizController.obterDadosQuiz(req, res);
})

router.post("/quiz/resultados", function (req, res) {
    quizController.cadastrarResultados(req, res);
})

module.exports = router;