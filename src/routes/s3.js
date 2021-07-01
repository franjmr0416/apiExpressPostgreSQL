const {Router} = require('express');
const router = Router();
const {upload} = require('../libs/multer');

const { uploadFile, getbyIdConsulta, get } = require('../controllers/s3');

//subir archivo a s3
router.post('/uploadfile',upload ,uploadFile);
//Get todos los archivos por id consulta
router.get('/getfiles/:id', getbyIdConsulta);

module.exports = router;
