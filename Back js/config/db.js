//connection to the database using mongoose orm 
const mongoose = require("mongoose");

const connectDB = async () => { // create async arrow function 
    try{   // connections are best inside try catch 
        const connection = await mongoose.connect(  // connect function from mongoose use await to get response  , sends a json object{}   
            "mongodb+srv://sampy:pwNpsW3K61$H@cluster0.idlarsy.mongodb.net/?retryWrites=true&w=majority",{
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
        const url = `${connection.connection.host}:${connection.connection.port}`;
        console.log(`MongoDB connected in: ${url}`);

    }catch(error){
        console.log(`error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;