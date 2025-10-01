const Recipes = require("../models/recipe")    //Import the recipe model from the models folder
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images');
    },
    filename: function (req, file, cb) {
      const filename = Date.now() + '-' + file.filename
      cb(null, filename);
    }
  });
  
  const upload = multer({ storage: storage });
  

const getRecipes = async(req, res) => {            // defines a controller function getRecipes with the request, response objects
    const recipes = await Recipes.find()           // find all the recipes in the database
    return res.json(recipes)                       // Send the recipes in the json response
}

const getRecipe = async(req, res) => {            // controller to get a single recipe by its ID
    const recipe = await Recipes.findById(req.params.id)   // Find a recipe by ID from the request params
    res.json(recipe)                                        // send the recipe as the json response
}

const addRecipe = async (req, res) => {            // defines a controller function getRecipes with the request, response objects
    const {title, ingredients, instructions, time} = req.body   

    if(!title || !ingredients || !instructions){
        res.json({message:"Required fields can't be empty."})
    }

    const newRecipe = await Recipes.create({
        title, ingredients, instructions, time, coverImage:req.file.filename
    })

    return res.json(newRecipe)
}

const editRecipe = async(req, res) => {            // defines a controller function getRecipes with the request, response objects
    const {title, ingredients, instructions, time} = req.body         // destructure the fields from the request body

    let recipe = await Recipes.findById(req.params.id)

    try{
        if(recipe){
            await Recipes.findByIdAndUpdate(req.params.id, req.params.body, {new : true})
            res.json({title,ingredients, instructions, time})
        }
    }
    catch(err){
        return res.status(400).json({message : "error"})
    }
}

const deleteRecipe = (req, res) => {            // defines a controller function getRecipes with the request, response objects
    res.json({message : "hello"})
}

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe, upload}                //makes the function usable in other files