const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/encuesta');

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

module.exports = router;