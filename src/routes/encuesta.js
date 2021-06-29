const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, registro} = require('../controllers/encuesta');

//Get all
router.get('/encuesta', getAll);
//Get by Id
router.get('/encuesta/:id', getById);
//Create
router.post('/encuesta',create);
//Update
router.put('/encuesta/:id',update);
//Delete
router.delete('/encuesta/:id', deleteById);
//resgitrar encuesta
router.post('/encuestaRegistro', registro);

module.exports = router;