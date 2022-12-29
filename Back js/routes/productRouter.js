const express = require("express");
const router = express.Router(); // router module declatarion 
const productController = require("../controllers/productController")
const authMidd = require("../middleware/authMidd");

router.get("/", productController.getProductAll);
router.get("/create/:id", authMidd, productController.getProductId);
router.get("/:id", authMidd, productController.getProduct);
router.post("/", authMidd, productController.createProduct );
router.put("/:id", authMidd, productController.updateProduct);
router.delete("/:id", authMidd, productController.deleteProduct);

//module has to be exported 
module.exports= router;