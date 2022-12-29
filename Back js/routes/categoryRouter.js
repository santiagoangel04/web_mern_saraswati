const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");
const authMidd = require("../middleware/authMidd");

//middleware acts for each operation to auth and register who is making requests

router.get("/home", categoryController.getCategoryHOME)
router.get("/", authMidd, categoryController.getCategory);
router.get("/:id", authMidd, categoryController.getCategoryId);
router.post("/", authMidd, categoryController.createCategory);
router.put("/:id", authMidd, categoryController.updateCategory);
router.delete("/:id", authMidd, categoryController.deleteCategory);

module.exports = router;