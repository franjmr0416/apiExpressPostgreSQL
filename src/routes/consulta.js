const {Router} = require('express');
const router = Router();
const {upload} = require('../libs/multer');
const {getAll, getById, create, update, deleteById, getConsultasByMedId, createWithFile} = require('../controllers/consulta');

//Get all
router.get('/consulta', getAll);
//Get by Id
router.get('/consulta/:id', getById);
//Create
router.post('/consulta',create);
//Update
router.put('/consulta/:id',update);
//Delete
router.delete('/consulta/:id', deleteById);
//get consultas by id medico
router.get('/consultasByIdMedico/:id', getConsultasByMedId);
//post con archivo
router.post('/consultaFile', createWithFile);

module.exports = router;