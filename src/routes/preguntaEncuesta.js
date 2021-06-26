const {Router} = require('express');
const router = Router();

const {
    getAll,
    create,
    getPregRestByEncuesta,
    getUsersAndIdEncuesta
} = require('../controllers/preguntaEncuesta');

//get All
router.get('/preguntaEncuesta', getAll);
//create
router.post('preguntaEncuesta', create);

//get preguntas con respuestas by id encuesta
router.get('/cuestionario/:id',getPregRestByEncuesta);
//get all datos usuario con id encuesta
router.get('/usuariosIdEncuesta', getUsersAndIdEncuesta);
module.exports = router;