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
  const { fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente } = req.body;
  const response = await db.query('INSERT INTO consulta (fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente ) VALUES ($1, $2, $3, $4, $5, $6)', 
  [fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente]);
  res.json({
      message: 'consulta Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente } = req.body;

  const response =await db.query('UPDATE consulta SET fecha =$2, descripcion =$3, tipocita =$4, sospechoso =$5, idmedico =$6, idpaciente =$7 WHERE id = $1', 
  [id, fecha, descripcion, tipocita, sospechoso, idmedico, idpaciente]);
  res.json('consulta Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM consulta where id = $1', [id]);
  res.json(`consulta ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};