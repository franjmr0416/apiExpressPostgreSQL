const express = require("express");
const cors = require("cors");
const app = express();

const aws = require('aws-sdk');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
const multerS3 = require('multer-s3');
const { uploadFile } = require('./config/s3');

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

app.post('/images', upload.single('image'), async (req, res) => {
    const file = req.file
    console.log(file)
    const result = await uploadFile(file)
    console.log(result)
    res.send("👌")
})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`🚀 App started on port ${PORT}`)
});

