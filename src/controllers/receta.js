const db = require("../config/db");
//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM receta').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM receta WHERE id = $1',[id]);
  res.json(response.rows);
};
//get datos receta médica completa
const getReceta = async(req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query("select r.dosis, m.medicamento, concat(u.nombre,' ', u.apellidos) as Medico, c.fecha, c.diagnostico from receta r inner join consulta c on c.id = r.idconsulta inner join medicamento m on m.id = r.idmedicamento inner join usuario u on u.id = c.idmedico where c.id = $1;",[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { dosis, idmedicamento, idconsulta } = req.body;
  const response = await db.query('INSERT INTO receta (dosis, idmedicamento, idconsulta) VALUES ($1, $2, $3)', [dosis, idmedicamento, idconsulta]);
  res.json({
      message: 'receta Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { dosis, idmedicamento, idconsulta } = req.body;

  const response =await db.query('UPDATE receta SET dosis = $2, idmedicamento = $3, idconsulta = $4 WHERE id = $1', [
      id, dosis, idmedicamento, idconsulta]);
  res.json('receta Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM receta where id = $1', [id]);
  res.json(`receta ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getReceta
};