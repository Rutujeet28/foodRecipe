const Recipes = require("../models/recipe")

const getRecipes = async(req, res) => {            // defines a controller function getRecipes with the request, response objects
    const recipes = await Recipes.find()
    return res.json(recipes)
}

const getRecipe = async(req, res) => {            // defines a controller function getRecipes with the request, response objects
    const recipe = await Recipes.findById(req.params.id)
    res.json(recipe)
}

const addRecipe = async (req, res) => {            // defines a controller function getRecipes with the request, response objects
    const {title, ingredients, instructions, time} = req.body

    if(!title || !ingredients || !instructions){
        res.json({message:"Required fields can't be empty."})
    }

    const newRecipe = await Recipes.create({
        title, ingredients, instructions, time
    })

    return res.json(newRecipe)
}

const editRecipe = async(req, res) => {            // defines a controller function getRecipes with the request, response objects
    const {title, ingredients, instructions, time} = req.body

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

module.exports = {getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe}                //makes the function usable in other files