const { response } = require("express");
const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM tipousuario').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM tipousuario WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { tipo } = req.body;
  const response = await db.query('INSERT INTO tipousuario (tipo) VALUES ($1)', [tipo]);
  res.json({
      message: 'Area Added successfully',
      body: {
          area: {tipo}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { tipo } = req.body;

  const response =await db.query('UPDATE tipousuario SET tipo = $1 WHERE id = $2', [
      tipo,id]);
  res.json('TipoUser Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM tipousuario where id = $1', [id]);
  res.json(`TipoUser ${id} deleted Successfully`);
};
//get by tipo
const getByTipo = async(req, res) =>{
  const tipo = req.params.tipo;
  const response = await db.query("select * from tipousuario where tipo= $1",[tipo]);
  res.json(response.rows);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getByTipo
};