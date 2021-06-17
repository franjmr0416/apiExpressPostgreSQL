const {Router} = require('express');
const router = Router();

const {getAll, getById, create, update, deleteById, getbyEmailPass, getCitas, getPruebas,getContPrueba} = require('../controllers/usuario');

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
//get login
router.post('/usuario/login', getbyEmailPass);
//get Citas
router.get('/usuario/citas/:id', getCitas);
//get pruebas Estudiante home
router.get('/usuario/pruebas/:id', getPruebas);
//get contenido reporte prueba
router.get('/usuario/pruebaReporte/:id', getContPrueba);
module.exports = router;