const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM tipoprueba').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM tipoprueba WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { tipoprueba } = req.body;
  const response = await db.query('INSERT INTO tipoprueba (tipoprueba) VALUES ($1)', [tipoprueba]);
  res.json({
      message: 'tipoprueba Added successfully',
      body: {
          area: {tipoprueba}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { tipoprueba } = req.body;

  const response =await db.query('UPDATE tipoprueba SET tipoprueba = $1 WHERE id = $2', [
    tipoprueba,id]);
  res.json('tipoprueba Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM tipoprueba where id = $1', [id]);
  res.json(`tipoprueba ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};