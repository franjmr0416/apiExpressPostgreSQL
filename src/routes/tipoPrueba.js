const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/tipoPrueba');

//Get all
router.get('/tipoPrueba', getAll);
//Get by Id
router.get('/tipoPrueba/:id', getById);
//Create
router.post('/tipoPrueba',create);
//Update
router.put('/tipoPrueba/:id',update);
//Delete
router.delete('/tipoPrueba/:id', deleteById);

module.exports = router;