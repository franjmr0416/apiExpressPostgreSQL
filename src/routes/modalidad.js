const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/modalidad');

//Get all
router.get('/modalidad', getAll);
//Get by Id
router.get('/modalidad/:id', getById);
//Create
router.post('/modalidad',create);
//Update
router.put('/modalidad/:id',update);
//Delete
router.delete('/modalidad/:id', deleteById);

module.exports = router;