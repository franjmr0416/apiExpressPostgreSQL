const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/medicamento');

//Get all
router.get('/medicamento', getAll);
//Get by Id
router.get('/medicamento/:id', getById);
//Create
router.post('/medicamento',create);
//Update
router.put('/medicamento/:id',update);
//Delete
router.delete('/medicamento/:id', deleteById);

module.exports = router;