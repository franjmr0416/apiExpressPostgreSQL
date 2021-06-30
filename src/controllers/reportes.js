const db = require("../config/db");

//1. get # casos estudiantes
const getCasosEstudiantes = async(req, res) =>{
    const response = await db.query("select u.nombre, u.apellidos, o.fecha, o.resultado, a.carreradepto from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipousuario t on t.id = u.idtipo inner join area a on a.id = u.idarea where t.tipo = 'Estudiante' and o.resultado='Positivo';");
    res.json(response.rows);
};
//1. get # casos personal
const getCasosPersonal = async(req, res) =>{
    const response = await db.query("select u.nombre, u.apellidos, o.fecha, o.resultado, a.carreradepto from usuario u inner join ordenprueba o on u.id = o.idusuario inner join tipousuario t on t.id = u.idtipo inner join area a on a.id = u.idarea where t.tipo = 'Profesor' and o.resultado='Positivo';");
    res.json(response.rows);
};
//2. # casos por departameno y carrera
const getCasosDepto = async(req, res)=>{
    const response = await db.query("select count(o.id) as nocasos, a.carreradepto from ordenprueba o inner join usuario u on u.id = o.idusuario inner join area a on a.id = u.idarea where o.resultado = 'Positivo' group by a.carreradepto;");
    res.json(response.rows);
};
//3. #casos por carrera de estudiantes
const getNumCasosCarrEstu = async(req, res) =>{
    const response = await db.query("select count(o.id) as nocasos, a.carreradepto from ordenprueba o inner join usuario u on u.id = o.idusuario inner join area a on a.id = u.idarea inner join tipousuario t on t.id = u.idtipo where o.resultado = 'Positivo' and t.tipo = 'Estudiante' group by a.carreradepto;");
    res.json(response.rows);
};
//3. #casos por depto de personal
const getNumCasosDeptoPerso = async(req, res) =>{
    const response = await db.query("select count(o.id) as nocasos, a.carreradepto from ordenprueba o inner join usuario u on u.id = o.idusuario inner join area a on a.id = u.idarea inner join tipousuario t on t.id = u.idtipo where o.resultado = 'Positivo' and not t.tipo = 'Estudiante' group by a.carreradepto;");
    res.json(response.rows);
};
//4. # encuestas por carrera y depto
const getEncuestasDepto = async(req, res)=>{
    const response = await db.query("select count(u2.idencuesta) as noencuestas, a.carreradepto from area a inner join usuario u on a.id = u.idarea inner join usuarioencuesta u2 on u.id = u2.idusuario group by carreradepto;");
    res.json(response.rows);
};
//5. # consultas por medico
const getConsultasMedico = async(req, res) => {
    const response = await db.query("select count(c.id) as noconsultas, concat(u.nombre, ' ', u.apellidos) as medico from usuario u inner join consulta c on u.id = c.idmedico group by medico;");
    res.json(response.rows);
};


module.exports = {
    getCasosEstudiantes,
    getCasosPersonal,
    getCasosDepto,
    getEncuestasDepto,
    getConsultasMedico,
    getNumCasosCarrEstu,
    getNumCasosDeptoPerso
}