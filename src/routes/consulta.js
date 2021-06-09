const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/consulta');

//Get all
router.get('/consulta', getAll);
//Get by Id
router.get('/consulta/:id', getById);
//Create
router.post('/consulta',create);
//Update
router.put('/consulta/:id',update);
//Delete
router.delete('/consulta/:id', deleteById);

module.exports = router;