const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/ordenPrueba');

//Get all
router.get('/ordenPrueba', getAll);
//Get by Id
router.get('/ordenPrueba/:id', getById);
//Create
router.post('/ordenPrueba',create);
//Update
router.put('/ordenPrueba/:id',update);
//Delete
router.delete('/ordenPrueba/:id', deleteById);

module.exports = router;