const db = require("../config/db");
//no pruebas por fecha
const historialPruebas = async(req, res) =>{
    const response = await db.query("select count(id) as no_pruebas, fecha from ordenprueba group by fecha;");
    res.json(response.rows);
};
//no pruebas con porcentajes
const pruebasPorResultado = async(req, res) =>{
    const confirmados = await db.query("select id from ordenprueba where resultado ='Positivo';");
    const descartados = await db.query("select id from ordenprueba where resultado ='Negativo';");

    let noConfirmados = confirmados.rowCount;
    let noDescartados = descartados.rowCount;
    let total = noConfirmados + noDescartados;

    let porcentajeC = (noConfirmados/ total)*100;
    let porcentajeD = (noDescartados/ total)*100;

    res.json({
        'total': total,
        'no_confirmados': noConfirmados,
        'no_descartados': noDescartados,
        'porcentajeConfi': porcentajeC.toFixed(2),
        'porcentajeDesc': porcentajeD.toFixed(2)
    });
};
//fecha primer y ultimo caso detectado
const primerUltimo = async(req, res)=>{
    const fechas = await db.query("select fecha from ordenprueba where resultado = 'Positivo' order by fecha;");
    let primerCaso = fechas.rows[0];
    let ultimoCaso = fechas.rows[fechas.rows.length - 1];
    res.json({
        'primerCasoDetectado': primerCaso,
        'ultimoCasoDetectado': ultimoCaso
    });
};

module.exports = {
    historialPruebas,
    pruebasPorResultado,
    primerUltimo
};