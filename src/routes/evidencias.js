const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/evidencias');

//Get all
router.get('/evidencias', getAll);
//Get by Id
router.get('/evidencias/:id', getById);
//Create
router.post('/evidencias',create);
//Update
router.put('/evidencias/:id',update);
//Delete
router.delete('/evidencias/:id', deleteById);

module.exports = router;