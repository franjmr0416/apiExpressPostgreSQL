const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/pregunta');

//Get all
router.get('/pregunta', getAll);
//Get by Id
router.get('/pregunta/:id', getById);
//Create
router.post('/pregunta',create);
//Update
router.put('/pregunta/:id',update);
//Delete
router.delete('/pregunta/:id', deleteById);

module.exports = router;