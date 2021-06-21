const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, getByIdUsuario, getAllConNombres} = require('../controllers/ordenPrueba');
const { route } = require('./usuario');

//Get all
router.get('/ordenPrueba', getAll);
//Get by Id
router.get('/ordenPrueba/:id', getById);
//Create
router.post('/ordenPrueba',create);
//Update
router.put('/ordenPrueba/:id',update);
//Delete
router.delete('/ordenPrueba/:id', deleteById);
//get By idUsuario
router.get('/ordenPrueba/usuario/:id', getByIdUsuario);
//get all con nombre de usuario y tipo prueba
router.get('/ordenPruebaAllNombres', getAllConNombres);
module.exports = router;