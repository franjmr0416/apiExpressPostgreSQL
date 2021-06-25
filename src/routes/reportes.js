const {Router} = require('express');
const router = Router();

const {
    getCasosEstudiantes,
    getCasosPersonal,
    getCasosDepto,
    getEncuestasDepto,
    getConsultasMedico,
    getNumCasosCarrEstu,
    getNumCasosDeptoPerso
}= require('../controllers/reportes');
const { route } = require('./usuario');

//1. get # casos estudiantes
router.get('/reportesCasosEstudiantes',getCasosEstudiantes);
//1. get # casos personal
router.get('/reportesCasosPersonal', getCasosPersonal);
//2. # casos por departameno y carrera
router.get('/reportesCasosDepto', getCasosDepto);
//3. #casos por carrera de estudiantes
router.get('/reportesNumCasosCarrEstu', getNumCasosCarrEstu);
//3. #casos por depto de personal
router.get('/reportesNumCasosDeptoPerso', getNumCasosDeptoPerso);
//4. # encuestas por carrera y depto
router.get('/reportesEncuestasDepto', getEncuestasDepto);
//5. # consultas por medico
router.get('/reportesConsultasMedico', getConsultasMedico);


module.exports = router;