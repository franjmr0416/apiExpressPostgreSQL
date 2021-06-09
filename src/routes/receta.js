const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/receta');

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

module.exports = router;