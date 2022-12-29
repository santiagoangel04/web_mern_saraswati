const mongoose = require("mongoose");
// creates the table (object) user 

const UsersSchema = mongoose.Schema ({
    nombre:{type: String, required: true, trim: true},
    email:{type: String, required: true, trim: true, unique: true}, 
    password:{type: String, required: true, trim: true},
    registro:{type: Date, default: Date.now()}
});

// defines the model 
module.exports = mongoose.model("User", UsersSchema);