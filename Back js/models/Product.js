const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema ({
    nombre: {type: String, required: true, trim: true},
    descripcion: {type: String, required: true, trim: true},
    stock: {type: Number, required: true, trim: true},
    precio: {type: Number, required: true, trim: true},
    imagen:{type: String, required: true, trim: true},
    creado:{type: Date, default: Date.now()},
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref:"Category"}
});

module.exports = mongoose.model("Product", ProductSchema);