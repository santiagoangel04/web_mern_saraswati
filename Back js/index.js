const express = require("express");
// const to load express module 
const cors = require("cors");
const connectDB = require("./config/db");
const userRouter = require("./routes/userRouter");
const auth = require("./routes/auth");
const categoryRouter = require("./routes/categoryRouter");
const productRouter = require("./routes/productRouter");


const app = express();
// app const to add express function to app (app with express module)
app.use(express.json({extended: true}));

connectDB();
//habilitar los cors

app.use(cors());

//routes for user creation and authentication
     //endpoint given, routerfunctionality
app.use("/api/users", userRouter);
app.use("/api/auth", auth);

//routes for category
app.use("/api/categories", categoryRouter);

//routes for product
app.use("/api/products/", productRouter);



app.listen(4000, () => {
    try{
    console.log("server running on port 4000");
    }catch(error){
        console.log(error);
    }
});


