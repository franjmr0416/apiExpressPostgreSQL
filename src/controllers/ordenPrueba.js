const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM ordenprueba').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM ordenprueba WHERE id = $1',[id]);
  res.json(response.rows);
};
//get by idUsuario
const getByIdUsuario = async(req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM ordenprueba WHERE idusuario = $1',[id]);
  if(response.rows.length != 0){
    res.json(response.rows);
  }else{
    res.json({error: 'NO cuenta con ordenes de prueba'});
  }
  
};
//create
const create = async (req, res) => {
  const { resultado, fecha, idusuario, idtipo } = req.body;
  const response = await db.query('INSERT INTO ordenprueba (resultado, fecha, idusuario, idtipo) VALUES ($1, $2, $3, $4)', 
  [
    resultado,
    fecha,
    idusuario,
    idtipo    
  ]);
  res.json({
      message: 'ordenPrueba Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { resultado, fecha, idusuario, idtipo } = req.body;

  const response =await db.query('UPDATE ordenprueba SET resultado = $2, fecha = $3, idusuario = $4, idtipo = $5 WHERE id = $1', 
    [
        id,
        resultado,
        fecha,
        idusuario,
        idtipo
    ]);
  res.json('ordenPrueba Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM ordenprueba where id = $1', [id]);
  res.json(`ordenprueba ${id} deleted Successfully`);
};


module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getByIdUsuario
};