const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const JuegosSchema = new Schema({



	nombre:String,
  descripcion:String,

});

module.exports = mongoose.model("Juegos", JuegosSchema);
