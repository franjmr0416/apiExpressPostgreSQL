const {Router} = require('express');
const router = Router();

const {
    getPregRestByEncuesta,
    getUsersAndIdEncuesta
} = require('../controllers/preguntaEncuesta');

//get preguntas con respuestas by id encuesta
router.get('/cuestionario/:id',getPregRestByEncuesta);
//get all datos usuario con id encuesta
router.get('/usuariosIdEncuesta', getUsersAndIdEncuesta);
module.exports = router;