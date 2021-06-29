const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM encuesta').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM encuesta WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { idmodalidad, fecha } = req.body;
  const response = await db.query('INSERT INTO encuesta (idmodalidad, fecha) VALUES ($1, $2)', [idmodalidad, fecha]);
  res.json({
      message: 'encuesta Added successfully',
      body: {
          area: {idmodalidad}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { idmodalidad, fecha } = req.body;

  const response =await db.query('UPDATE encuesta SET idmodalidad = $1, fecha = $2 WHERE id = $3', [
      idmodalidad,
      fecha,
      id]);
  res.json('encuesta Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM encuesta where id = $1', [id]);
  res.json(`encuesta ${id} deleted Successfully`);
};
const registro = async(req ,res) => {
  const id_modalidad = req.body.id_modalidad;
  const fecha = req.body.fecha;
  const id_user = req.body.id_user;
  const preguntas = req.body.preguntas;
  
  try {
  //realizar transaccion
  await db.query("BEGIN");
  const insertEncuesta = await db.query("insert into encuesta (idmodalidad, fecha) VALUES ($1, $2);", [id_modalidad, fecha]);
  const insertUsuarioEncuesta = await db.query("insert into usuarioencuesta (idusuario, idencuesta)  select ($1) as idusuario, (select id from encuesta order by (id) desc limit 1) as idencuesta;", [id_user]);
  await db.query("COMMIT");

  } catch (error) {
    console.log("Error en transaccion: " + error);
  }

//hacer select de ultimo id encuesta
const last_id_encuesta = await db.query("select id from encuesta order by (id) DESC limit 1;")
//guardar en variable
const id_encuesta = last_id_encuesta.rows[0].id;
console.log("Id encuesta: "+id_encuesta);

//realizar inserts con foreach
preguntas.forEach(element => {
  const insertPreguntas = db.query("insert into preguntaencuesta (idpregunta, idencuesta, respuesta) VALUES ($1, $2, $3);", 
  [element.id_pregunta, id_encuesta, element.respuesta]);
});

  res.json({
    id_modalidad,
    fecha,
    id_user,
    preguntas
  });
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  registro
};