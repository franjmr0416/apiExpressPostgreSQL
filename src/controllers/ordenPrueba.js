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
  const response = await db.query("select o.id, o.fecha, o.resultado, t.tipoprueba from ordenprueba o inner join tipoprueba t on t.id = o.idtipo where o.idusuario = $1;",[id]);
  if(response.rows.length != 0){
    res.json(response.rows);
  }else{
    res.json({error: 'NO cuenta con ordenes de prueba'});
  }
  
};
//get * con nombre tipo prueba y usuario
const getAllConNombres = async(req, res)=>{
  const response = await db.query("select o.id as id_orden_prueba, o.resultado, o.fecha, t.tipoprueba, u.id as id_usuario, concat(u.nombre,' ', u.apellidos) as nombre from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipoprueba t on t.id = o.idtipo;");
  res.json(response.rows);
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
  getByIdUsuario,
  getAllConNombres
};