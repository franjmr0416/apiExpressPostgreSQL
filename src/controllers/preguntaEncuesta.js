const db = require("../config/db");

//get All
const getAll = async(req, res) =>{
    const response = await db.query("select * from preguntaencuesta;");
    res.json(response.rows);
};
const create = async(req, res) =>{
    const { idpregunta, idencuesta, respuesta } = req.body;
    const response = await db.query("INSERT INTO preguntaencuesta (idpregunta, idencuesta, respuesta) VALUES($1, $2, $3)", [idpregunta, idencuesta, respuesta]);
    res.json({mensaje: 'Se agrego correctamente'});
};

//get preguntas con respuestas by id encuesta
const getPregRestByEncuesta = async(req, res)=>{
    const id = parseInt(req.params.id);
    const response = await db.query("select p.pregunta, p2.respuesta from pregunta p inner join preguntaencuesta p2 on p.id = p2.idpregunta where p2.idencuesta = $1;",[id]);
    res.json(response.rows);
};
//get all datos usuario con id encuesta
const getUsersAndIdEncuesta = async(req, res) =>{
    const response = await db.query("select u.id, u.nombre, u.apellidos, age(u.nacimiento) as edad, split_part(u.email,'@',1) as noControl, u.estatus, u2.idencuesta, e.fecha  from usuario u inner join usuarioencuesta u2 on u.id = u2.idusuario inner join encuesta e on e.id = u2.idencuesta;");
    res.json(response.rows);
};

module.exports ={
    getPregRestByEncuesta,
    getUsersAndIdEncuesta,
    getAll,
    create
};