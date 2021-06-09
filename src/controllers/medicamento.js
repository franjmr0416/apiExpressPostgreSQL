const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM medicamento').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM medicamento WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { medicamento } = req.body;
  const response = await db.query('INSERT INTO medicamento (medicamento) VALUES ($1)', [medicamento]);
  res.json({
      message: 'medicamento Added successfully',
      body: {
          area: {medicamento}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { medicamento } = req.body;

  const response =await db.query('UPDATE medicamento SET medicamento = $1 WHERE id = $2', [
    medicamento,id]);
  res.json('Area Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM medicamento where id = $1', [id]);
  res.json(`medicamento ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};