const express = require("express")
const { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload } = require("../controller/recipe")
const router = express.Router()
const verifyToken = require('../middleware/auth')

router.get("/", getRecipes)          // Gets all the recipes
router.get("/:id", getRecipe)        // Gets the recipes by ids
router.post("/",upload.single('file'),verifyToken ,addRecipe)          // Adds the recipe
router.put("/:id", editRecipe)       //Edits the recipe
router.delete("/:id", deleteRecipe)  // Delete the recipes

module.exports = router