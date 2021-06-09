const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/usuario');

//Get all
router.get('/usuario', getAll);
//Get by Id
router.get('/usuario/:id', getById);
//Create
router.post('/usuario',create);
//Update
router.put('/usuario/:id',update);
//Delete
router.delete('/usuario/:id', deleteById);

module.exports = router;