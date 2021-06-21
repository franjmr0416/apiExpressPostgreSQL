const {Router} = require('express');
const router = Router();

const {
    getPregRestByEncuesta
} = require('../controllers/preguntaEncuesta');

//get preguntas con respuestas by id encuesta
router.get('/cuestionario/:id',getPregRestByEncuesta);

module.exports = router;