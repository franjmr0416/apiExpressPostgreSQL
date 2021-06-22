const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, getByArea} = require('../controllers/area');

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
//get by area
router.post('/areaNombre', getByArea);

module.exports = router;