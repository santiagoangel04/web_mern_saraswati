// midddleware es una capa de seguridad para que el programa entre en una 
//pausa o se pueda direccionar a otra parte comunica con diferentes partes del programa
const jwt = require("jsonwebtoken"); 
const { reset } = require("nodemon");

module.exports = function (req, res, next) {
    //read the token from header or postman header has to be spcifiedo or else it must not work 
    const tok = req.header("x-auth-token"); 
    //console.log(tok);

    if (!tok) {
        return res.status(404).json({msg : "No token"})
    }
    
    //validate token
    try{
       const cifer = jwt.verify(tok, process.env.SECRET);
       req.user = cifer.user;
       //console.log(cifer.user);
       next();

    } catch(error) {
        res.status(400).json({msg: "Not a valid Token"})
    }
}