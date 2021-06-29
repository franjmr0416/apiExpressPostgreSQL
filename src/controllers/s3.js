const {upload, s3} = require('../libs/multer');
const db = require("../config/db");


//guardar nombre archivo en DB
const uploadFile = async(req, res) =>{
  const evidencia = req.file.location;
  await db.query("BEGIN");
  await db.query("INSERT INTO evidencias (evidencia) VALUES($1)",[evidencia]);

  const lastIdConsulta = await db.query("select id from consulta order by id desc limit 1;")
  const lastIdEvidencia = await db.query("select id from evidencias order by id desc limit 1;");
  //guardar en variable
  const idConsulta = lastIdConsulta.rows[0].id;
  const idEvidencia = lastIdEvidencia.rows[0].id;
  //insertar en tabla relacion consultaEvidencia
  await db.query("insert into consultaevidencia (idconsulta, idevidencia) VALUES ($1, $2)", [idConsulta, idEvidencia]);
  await db.query("COMMIT");
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