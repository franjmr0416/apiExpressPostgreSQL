const {upload, s3} = require('../libs/multer');
const db = require("../config/db");


//guardar nombre archivo en DB
const uploadFile = async(req, res) =>{
  const evidencia = req.file.location;
  const response = await db.query("INSERT INTO evidencias (evidencia) VALUES($1)",[evidencia]);
  res.json({mensaje: 'Archivo subido'});
};

const getAll = async(req, res) =>{
  console.log(req.file.location);
  res.json({mensaje: 'entro a  get archivos'});

};

const get = (req, res) =>{

};

module.exports = {
    uploadFile,
    getAll,
    get
  };