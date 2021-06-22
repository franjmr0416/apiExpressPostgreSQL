const {Router} = require('express');
const router = Router();
const {upload} = require('../libs/multer');

const { uploadFile, getAll, get } = require('../controllers/s3');

//subir archivo a s3
router.post('/uploadfile',upload ,uploadFile);

module.exports = router;
