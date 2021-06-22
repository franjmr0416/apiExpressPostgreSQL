const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, getByTipo} = require('../controllers/tipoUsuario');

//Get all
router.get('/tipoUsuario', getAll);
//Get by Id
router.get('/tipoUsuario/:id', getById);
//Create
router.post('/tipoUsuario',create);
//Update
router.put('/tipoUsuario/:id',update);
//Delete
router.delete('/tipoUsuario/:id', deleteById);
//Get by tipo
router.get('/tipoUsuario/tipo/:tipo', getByTipo);
module.exports = router;