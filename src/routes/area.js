const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById} = require('../controllers/area');

//Get all
router.get('/area', getAll);
//Get by Id
router.get('/area/:id', getById);
//Create
router.post('/area',create);
//Update
router.put('/area/:id',update);
//Delete
router.delete('/area/:id', deleteById);

module.exports = router;