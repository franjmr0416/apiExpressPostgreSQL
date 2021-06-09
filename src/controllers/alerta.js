const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM alerta').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM alerta WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { mensage, fecha, idprueba } = req.body;
  const response = await db.query('INSERT INTO alerta (mensage, fecha, idprueba) VALUES ($1, $2, $3)', [mensage, fecha, idprueba]);
  res.json({
      message: 'alerta Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { mensage, fecha, idprueba } = req.body;

  const response =await db.query('UPDATE alerta SET mensage = $2, fecha = $3, idprueba = $4 WHERE id = $1', 
  [
      id,
      mensage,
      fecha,
      idprueba
  ]);
  res.json('alerta Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM alerta where id = $1', [id]);
  res.json(`alerta ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};