const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM consulta').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM consulta WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora, diagnostico} = req.body;
  const response = await db.query('INSERT INTO consulta (fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora, diagnostico ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
  [fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora, diagnostico]);
  res.json({
      message: 'consulta Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora, estatus, diagnostico } = req.body;

  const response =await db.query('UPDATE consulta SET fecha =$2, descripcion =$3, tipocita =$4, sospechoso =$5, idmedico =$6, idpaciente =$7, hora=$8, estatus=$9, diagnostico=$10 WHERE id = $1', 
  [id, fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente, hora, estatus, diagnostico]);
  res.json('consulta Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM consulta where id = $1', [id]);
  res.json(`consulta ${id} deleted Successfully`);
};
//get consultas by id medico
const getConsultasByMedId = async (req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query("select c.id as id_consulta, u.id as id_paciente, split_part(u.email, '@', 1) as no_control, u.nombre, u.apellidos, c.tipocita, c.descripcion, c.estatus, c.fecha from usuario u inner join consulta c on u.id = c.idpaciente inner join tipousuario t on t.id = u.idtipo where c.idmedico = $1 and c.estatus = FALSE;",[id]);
  res.json(response.rows);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getConsultasByMedId
};