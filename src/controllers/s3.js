const {upload, s3} = require('../libs/multer');
const db = require("../config/db");


//guardar nombre archivo en DB
const uploadFile = async(req, res) =>{
  console.log(req.body);
  console.log(req.file.location);
  
  const { fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora} = req.body;
  const evidencia = req.file.location;

  try {
    await db.query("BEGIN");
    await db.query('INSERT INTO consulta (fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora ) VALUES ($1, $2, $3, $4, $5, $6, $7)', 
    [fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora]);
    
    await db.query("INSERT INTO evidencias (evidencia) VALUES($1)",[evidencia]);

    const lastIdConsulta = await db.query("select id from consulta order by id desc limit 1;")
    const lastIdEvidencia = await db.query("select id from evidencias order by id desc limit 1;");
    //guardar en variable
    const idConsulta = lastIdConsulta.rows[0].id;
    const idEvidencia = lastIdEvidencia.rows[0].id;
    //insertar en tabla relacion consultaEvidencia
    await db.query("insert into consultaevidencia (idconsulta, idevidencia) VALUES ($1, $2)", [idConsulta, idEvidencia]);
    await db.query("COMMIT");
    
    res.json({mensaje: 'Cita creada subido'});
  } catch (error) {
    console.log(error);
    res.send(error);
  }
  
};

const getbyIdConsulta = async(req, res) =>{
  const id = req.params.id;
  const response = await db.query("select evidencia from evidencias e inner join consultaevidencia c on e.id = c.idevidencia inner join consulta c2 on c2.id = c.idconsulta where c2.id = $1;",[id]);
  res.json(response.rows);

};

const get = (req, res) =>{

};

module.exports = {
    uploadFile,
    getbyIdConsulta,
    get
  };