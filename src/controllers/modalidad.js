const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM modalidad').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM modalidad WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { tipomodalidad } = req.body;
  const response = await db.query('INSERT INTO modalidad (tipomodalidad) VALUES ($1)', [tipomodalidad]);
  res.json({
      message: 'modalidad Added successfully',
      body: {
          area: {tipomodalidad}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { tipomodalidad } = req.body;

  const response =await db.query('UPDATE modalidad SET tipomodalidad = $1 WHERE id = $2', [
      tipomodalidad,id]);
  res.json('modalidad Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM modalidad where id = $1', [id]);
  res.json(`modalidad ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById
};