const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, getReceta} = require('../controllers/receta');

//Get all
router.get('/receta', getAll);
//Get by Id
router.get('/receta/:id', getById);
//Create
router.post('/receta',create);
//Update
router.put('/receta/:id',update);
//Delete
router.delete('/receta/:id', deleteById);
//get receta armada
router.get('/receta/imprimir/:id', getReceta);

module.exports = router;