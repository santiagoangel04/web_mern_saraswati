//controller sends the objects to database comm back with db

//async is used when we get non inmediate responses between the several apis 
const User = require("../models/User");
const bcryptjs = require("bcryptjs");

exports.getUsers = async (req, res) => {
    try {
        const user = await User.find();
        res.json({user})
    } catch (error) {
        console.log("AN ERROR HAS OCCURRED usersController get : "+ error);
    }
}

//post request 
exports.createUser = async (req, res) => {
    const {password, email} = req.body; // variable created to extract the password from the body
    
    try{
        //check that the user email is unique
        let user = await User.findOne({email});

        if (user) {
            return res.status(405).json({msg : "Method not allowed: User already exists"});  
        } else {

        console.log(req.body);
        // if not only the .body is selected we get more info about the creation of object


        // create new user object
        user = new User(req.body); 

        //encrypt the password    (await is the time to encrypt)
        user.password = await bcryptjs.hash(password, 10);

        //save object in db
        const userDB = await user.save();

        res.json(userDB);
    }

    }catch(error){
        console.log("AN ERROR HAS OCCURRED usersController : "+ error);
    }
}