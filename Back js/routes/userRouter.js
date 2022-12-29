// router is made to set the CRUD operations 
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController"); // imports the controller to communicate
const authMidd = require("../middleware/authMidd");

router.get("/", authMidd, usersController.getUsers);
router.post(
    "/", usersController.createUser //create user in root
);

//export routes
module.exports = router;