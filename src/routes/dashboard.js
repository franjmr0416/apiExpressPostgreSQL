const {Router} = require('express');
const router = Router();

const {
    historialPruebas,
    pruebasPorResultado,
    primerUltimo
}= require('../controllers/dashboard');
//no pruebas por fecha
router.get('/dashboardHistorial', historialPruebas);
//pruebas positivas y negativas
router.get('/dashboardPruebas', pruebasPorResultado);
//fecha primer y ultimo caso detectado
router.get('/dashboardPrimeroUltimo', primerUltimo);


module.exports = router;