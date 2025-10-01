import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './pages/Home';
import MainNavigation from './components/MainNavigation';
import axios from 'axios'
import AddFoodRecipe from './pages/AddFoodRecipe'; 


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

const router = createBrowserRouter([
    {path: "/", element:<MainNavigation/>, children: [
        {path: "/", element:<Home/>, loader:getAllRecipes},
        {path : "/myRecipe", element : <Home/>},
        {path : "/favRecipe", element : <Home/>},
        {path : "/addRecipe", element :<AddFoodRecipe/>},
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
