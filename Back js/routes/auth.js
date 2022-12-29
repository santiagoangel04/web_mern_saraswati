const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const authMidd = require("../middleware/authMidd");


router.get("/", authMidd, authController.AuthenticatedUser);

router.post(
    "/",  authController.authUser
);


module.exports = router;