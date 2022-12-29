const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config({path: "variables.env"});

exports.authUser = async (req, res) => {

    const {password, email} = req.body;

    try{
        // check that the user is registered
        let user = await User.findOne({email}); // creates a let variable that contains the user info 

        if (!user) {  
            return res.status(404).json({msg : "User not found"});   // block can be optimized
        }

        // check password
        const CorrectPassword = await bcryptjs.compare(password, user.password);
        if (!CorrectPassword) {
            return res.status(400).json({msg : "Wrong passsword"});
        }

        // if all is correct : create and sign a token          jwt consist of three parts header, payload and sign 
         /*The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.*/
        const payload = {
            user : {id: user.id} // create token by user 
        };

        //res.json(payload);    // block to create tokem
        jwt.sign(
            payload,
            process.env.SECRET, 
            {
                expiresIn: '5d',  // 5 days
            },
            (error, token) => {
                if (!error) res.json({token});
                throw error;
            }
        );

    }catch(error){
        console.log("AN ERROR HAS OCCURRED from authController : "+ error);
    }

}

exports.AuthenticatedUser = async (req, res) => {
    try{
       const user = await User.findById(req.user.id);
       res.json({user});

    } catch(error) {
        res.status(500).json({msg: "Error"+ error});
    }
}