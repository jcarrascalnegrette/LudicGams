//importamos
express = require("express");
mongoose = require("mongoose");
//instanciamos
const app = express();
const bodyParser = require("body-parser");
//midleware
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
//conectar a la base de datos
"mongodb+srv://admin:123jesus@cluster0-c9kfd.mongodb.net/juegosludicos?retryWrites=true",
{useNewUrlParser:true}
)
  .then(() => {
    console.log("connected");
  })
  .catch(err => {
    console.log("err", err);
  });

//modulos externos
var Juegos = require("./lib/Juegos");


app.get("/Juegos", (req, res) => {
  personas.getJuegos(req, res);
});


app.get("/Juegos/:id", (req, res) => {
  personas.getJuegos(req, res);
});

app.post("/Juegos", (req, res) => {
  personas.newJuegos(req, res);
});

app.put("/Juegos/:id", (req, res) => {
  personas.updateJuegos(req, res);
});

app.delete("/Juegos/:id", (req, res) => {
  personas.deleteJuegos(req, res);
});

var  = require("./lib/P_cognitivos");

app.get("/P_cognitivos", (req, res) => {
  hilo.getP_cognitivos(req, res);
});

app.get("/P_cognitivos/:id", (req, res) => {
  hilo.P_cognitivos(req, res);
});

app.post("/P_cognitivos", (req, res) => {
  hilo.P_cognitivos(req, res);
});

app.put("/P_cognitivos/:id", (req, res) => {
  hilo.updateP_cognitivos(req, res);
});

app.delete("/P_cognitivos/:id", (req, res) => {
  hilo.deleteP_cognitivos(req, res);
});

var foro = require("./lib/P_mentales");

app.get("/P_mentales", (req, res) => {
  foro.getP_mentales(req, res);
});

app.get("/P_mentales/:id", (req, res) => {
  foro.getP_mentales(req, res);
});

app.post("/P_mentales", (req, res) => {
  foro.newP_mentales(req, res);
});

app.put("/P_mentales/:id", (req, res) => {
  foro.updateP_mentales(req, res);
});

app.delete("/P_mentales/:id", (req, res) => {
  foro.deleteP_mentales(req, res);
});


var comentarios = require("./lib/T_mente");

app.get("/T_mente", (req, res) => {
  comentarios.getT_mente(req, res);
});

app.get("/T_mente/:id", (req, res) => {
  comentarios.getT_mente(req, res);
});

app.post("/T_mente", (req, res) => {
  comentarios.newT_mente(req, res);
});

app.put("/T_mente/:id", (req, res) => {
  comentarios.updateT_mente(req, res);
});

app.delete("/T_mente/:id", (req, res) => {
  comentarios.deleteT_mente(req, res);
});
// escuchamos
app.listen(3000);
console.log(`Server on %s ${app.settings.env}`);
