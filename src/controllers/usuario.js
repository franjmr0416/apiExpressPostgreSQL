const db = require("../config/db");

//get all
const getAll = async(req, res)=> {
  const response = await db.query('SELECT * FROM usuario').catch(console.log);
  res.status(200).json(response.rows);
};
//get By Id
const getById = async(req, res)=> {
  const id = parseInt(req.params.id);
  const response = await db.query('SELECT * FROM usuario WHERE id = $1',[id]);
  res.json(response.rows);
};
//get Login
const getbyEmailPass = async(req, res)=>{
  const email = req.body.email;
  const password = req.body.password;
  const response = await db.query("select u.id, u.nombre, u.apellidos, u.email, a.carreradepto, t.tipo from usuario u inner join area a on a.id = u.idarea inner join tipousuario t on t.id = u.idtipo where u.email= $1 and u.clave = $2;",[email, password]);
  if(response.rows.length != 0){
    res.json(response.rows);
  }else{
    res.json({error:'Usuario y/o contraseña incorrectos'});
  }
};
//get Citas o Consultas by Id
const getCitas = async(req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query("select c.id, c.fecha as Fecha, c.hora, concat(u2.nombre,' ', u2.apellidos) as Medico, c.tipocita as Modalidad, c.descripcion as Descripcion, c.sospechoso from usuario u inner join consulta c on u.id = c.idpaciente inner join usuario u2 on u2.id = c.idmedico where u.id = $1;",
  [id]
  );
  if(response.rows.length != 0){
    res.json(response.rows);
  }else{
    res.json({error: 'Aún no cuenta con citas medicas'});
  }
  
};
//get pruebas Vista Estudiante Home
const getPruebas = async(req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query("select o.id, o.fecha, t.tipoprueba, o.resultado from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipoprueba t on t.id = o.idtipo where u.id = $1;",[id]);
  if(response.rows != 0){
    res.json(response.rows);
  }else{
    res.json({error: 'No existen citas'});
  }
};
// get contenido reporte Prueba
const getContPrueba = async(req, res) =>{
  const id = parseInt(req.params.id);
  const response = await db.query("select concat(u.nombre, ' ', u.apellidos) as nombre, t.tipoprueba, o.fecha, o.resultado from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipoprueba t on t.id = o.idtipo where o.id = $1;",[id]);
  res.json(response.rows);
};
//create
const create = async (req, res) => {
  const { nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion, estatus } = req.body;
  const response = await db.query('INSERT INTO usuario (nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion, estatus) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)', 
  [nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion, estatus]);
  res.json({
      message: 'usuario Added successfully'
  })
}; 
//update
const update = async (req, res) => {
  const id = parseInt(req.params.id);
  const { nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion, estatus } = req.body;

  const response =await db.query('UPDATE usuario SET nombre =$2, apellidos =$3, nacimiento =$4, clave =$5, email =$6, idarea =$7, idtipo =$8, direccion =$9, estatus =$10 WHERE id = $1', 
  [
      id, nombre, apellidos, nacimiento, clave, email, idarea, idtipo, direccion, estatus
  ]);
  res.json('usuario Updated Successfully');
};
//delete
const deleteById = async (req, res) => {
  const id = parseInt(req.params.id);
  await db.query('DELETE FROM usuario where id = $1', [id]);
  res.json(`usuario ${id} deleted Successfully`);
};
//get usuarios por tipo usuario
const getBytipo = async (req, res) =>{
  const tipo = req.params.tipo;
  const response = await db.query("select u.id, u.nombre, u.apellidos from usuario u inner join tipousuario t on t.id = u.idtipo where t.tipo = $1;",[tipo]);
  res.json(response.rows);
};
//get info usuarios para tabla
const getTabla = async(req, res) =>{
  const response = await db.query("select u.id, u.nombre, u.apellidos, u.nacimiento, u.email, u.clave, u.direccion, u.estatus, t.tipo, a.carreradepto from usuario u inner join tipousuario t on t.id = u.idtipo inner join area a on a.id = u.idarea;");
  res.json(response.rows);
};
//punto 4 medico
const getAllInfoPruebas = async(req, res) =>{
  const response = await db.query("select o.id as id_prueba, o.fecha, u.id as id_usuario, concat(u.nombre, ' ', u.apellidos) as nombre, u.email, t.id as id_tipoprueba, t.tipoprueba, o.resultado from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipoprueba t on t.id = o.idtipo;");
  res.json(response.rows);
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  deleteById,
  getbyEmailPass,
  getCitas,
  getPruebas,
  getContPrueba,
  getBytipo,
  getTabla,
  getAllInfoPruebas
};