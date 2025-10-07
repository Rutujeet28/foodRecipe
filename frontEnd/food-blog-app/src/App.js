import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios'
import AddFoodRecipe from './pages/AddFoodRecipe'; 
import EditRecipe from './pages/EditRecipe';


// const getAllRecipes = async()=>{
//   let allRecipes = []
//   await axios.get('http://localhost:5000/recipe').then(res=>{
//     allRecipes = res.data
//   })
//   return allRecipes
// } 

const getAllRecipes = async () => {
  try {
    const res = await axios.get('http://localhost:5000/recipe')
    return res.data
  } catch (error) {
    console.error('Error fetching recipes:', error)
    return []  // Return an empty array in case of an error
  }
}

   
const getMyRecipes = async () => {
  let user = null
  try {
    user = JSON.parse(localStorage.getItem("user"))
  } catch (err) {
    console.error("User not found or invalid JSON:", err)
    return []  // return empty if user is not available
  }

  if (!user || !user._id) {
    console.warn("User not logged in or malformed user data.")
    return []
  }

  let allRecipes = await getAllRecipes()
  return allRecipes.filter(item => item.createdBy === user._id)
}

const getFavRecipes = () =>{
  return JSON.parse(localStorage.getItem("fav"))
}

const router = createBrowserRouter([
    {path: "/", element:<MainNavigation/>, children: [
        {path: "/", element:<Home/>, loader:getAllRecipes},
        {path:"/myRecipe",element:<Home/>,loader:getMyRecipes},
        {path : "/favRecipe", element : <Home/>, loader:getFavRecipes},
        {path : "/addRecipe", element :<AddFoodRecipe/>},
        {path : "/editRecipe/:id", element :<EditRecipe/>}
    ]}
  
])

function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
