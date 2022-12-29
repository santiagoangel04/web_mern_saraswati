const mongoose = require("mongoose");
// creates category table

//this is the creation of the category object and its atributes 
const CategorySchema = mongoose.Schema ({ 
    nombre: {type: String, required: true, trim: true} , 
              //relacionado con el id del user
    imagen: {type: String, required: true, trim: true},
    creador: {type: mongoose.Schema.Types.ObjectId, ref:"User"}, 
    creado: {type: Date, required: true, default: Date.now()}  
});

module.exports = mongoose.model("Category", CategorySchema);