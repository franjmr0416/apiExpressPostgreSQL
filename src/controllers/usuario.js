const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM usuario').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM usuario WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion } = req.body;
  const response = await db.query('INSERT INTO usuario (nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)', 
  [nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion]);
  res.json({
      message: 'usuario Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion } = req.body;

  const response =await db.query('UPDATE usuario SET nombre =$2, apellidos =$3, nacimiento =$4, clave =$5, email =$6, idarea =$7, idtipo =$8, direccion =$9 WHERE id = $1', 
  [
      id, nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion
  ]);
  res.json('usuario Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM usuario where id = $1', [id]);
  res.json(`usuario ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};