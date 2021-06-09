const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM evidencias').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM evidencias WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { evidencia } = req.body;
  const response = await db.query('INSERT INTO evidencias (evidencia) VALUES ($1)', [evidencia]);
  res.json({
      message: 'evidencias Added successfully',
      body: {
          area: {evidencia}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { evidencia } = req.body;

  const response =await db.query('UPDATE evidencias SET evidencia = $1 WHERE id = $2', [
      evidencia,id]);
  res.json('evidencias Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM evidencias where id = $1', [id]);
  res.json(`Area ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};