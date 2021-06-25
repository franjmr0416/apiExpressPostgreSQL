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


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};