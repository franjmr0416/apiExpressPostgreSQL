const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/alerta');

//Get all
router.get('/alerta', getAll);
//Get by Id
router.get('/alerta/:id', getById);
//Create
router.post('/alerta',create);
//Update
router.put('/alerta/:id',update);
//Delete
router.delete('/alerta/:id', deleteById);

module.exports = router;