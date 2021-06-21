const db = require("../config/db");

//get preguntas con respuestas by id encuesta
const getPregRestByEncuesta = async(req, res)=>{
    const id = parseInt(req.params.id);
    const response = await db.query("select p.pregunta, p2.respuesta from pregunta p inner join preguntaencuesta p2 on p.id = p2.idpregunta where p2.idencuesta = $1;",[id]);
    res.json(response.rows);
};

module.exports ={
    getPregRestByEncuesta
};