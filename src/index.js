const express = require("express");
const cors = require("cors");
const app = express();


//import the Routes
const areaRoutes = require('./routes/area');
const tipoUsuarioRoutes = require('./routes/tipoUsuario');
const tipoPruebaRoutes = require('./routes/tipoPrueba');
const medicamentoRoutes = require('./routes/medicamento');
const preguntaRoutes = require('./routes/pregunta');
const modalidadRoutes = require('./routes/modalidad');
const encuestaRoutes = require('./routes/encuesta');
const recetaRoutes = require('./routes/receta');
const ordenPruebaRoutes = require('./routes/ordenPrueba');
const consultaRoutes = require('./routes/consulta');
const usuarioRoutes = require('./routes/usuario');
const evidenciasRoutes = require('./routes/evidencias');
const alertaRoutes = require('./routes/alerta');
const cuestionariosRoutes = require('./routes/preguntaEncuesta');
const archivosRoutes = require('./routes/s3');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));

app.get("/", (req, res) =>{
    res.send("WELLCOME API COVID");
});
 

//configure the app
app.use(areaRoutes);
app.use(tipoUsuarioRoutes);
app.use(tipoPruebaRoutes);
app.use(medicamentoRoutes);
app.use(preguntaRoutes);
app.use(modalidadRoutes);
app.use(encuestaRoutes);
app.use(recetaRoutes);
app.use(ordenPruebaRoutes);
app.use(consultaRoutes);
app.use(usuarioRoutes);
app.use(evidenciasRoutes);
app.use(alertaRoutes);
app.use(cuestionariosRoutes);
app.use(archivosRoutes);


const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 App started on port ${PORT}`)
});

