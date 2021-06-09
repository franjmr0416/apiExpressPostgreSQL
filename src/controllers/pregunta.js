const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM pregunta').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM pregunta WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { pregunta } = req.body;
  const response = await db.query('INSERT INTO pregunta (pregunta) VALUES ($1)', [pregunta]);
  res.json({
      message: 'pregunta Added successfully',
      body: {
          area: {pregunta}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { pregunta } = req.body;

  const response =await db.query('UPDATE pregunta SET pregunta = $1 WHERE id = $2', [
    pregunta,id]);
  res.json('Area Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM pregunta where id = $1', [id]);
  res.json(`pregunta ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};