const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const T_menteSchema = new Schema({



	nombre:String,
  descripcion:String,

});

module.exports = mongoose.model("T_mente", JuegosSchema);
