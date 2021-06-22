const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM area').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM area WHERE id = $1',[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { carreradepto } = req.body;
  const response = await db.query('INSERT INTO area (carreradepto) VALUES ($1)', [carreradepto]);
  res.json({
      message: 'Area Added successfully',
      body: {
          area: {carreradepto}
      }
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { carreradepto } = req.body;

  const response =await db.query('UPDATE area SET carreradepto = $1 WHERE id = $2', [
      carreradepto,id]);
  res.json('Area Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM area where id = $1', [id]);
  res.json(`Area ${id} deleted Successfully`);
};
//get by nombre area
const getByArea = async (req, res) =>{
  const area =  req.body.area;
  const response = await db.query("select * from area where carreradepto= $1", [area]);
  res.json(response.rows);
}
module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getByArea
};