import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import foodImg from '../assets/foodRecipe.webp'
import { ImStopwatch } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function RecipeItems() {

    const recipes = useLoaderData()
    const [allRecipes, setAllRecipes] = useState()

    let path = window.localStorage.pathname === "/myRecipe" ? true : false
    let favItems = JSON.parse(localStorage.getItem("fav")) ?? []

    const [isFavRecipe, setIsFavRecipe] = useState(false)
    console.log(allRecipes)

    useEffect(() =>{
        setAllRecipes(recipes)
    },[recipes])

    const onDelete = async (id)=>{
        await axios.delete(`http://localhost:5000/recipe/${id}`)
        .then((res) => console.log(res))
        setAllRecipes(recipes => recipes.filter(recipe => recipe._id !== id))
    }

    const favRecipe = (item) =>{
        let filterItem = favItems.filter(recipe => recipe._id !== item._id)
        favItems = favItems.filter(recipe =>recipe._id === item._id).length === 0 ? [...favItems,item] : filterItem
        localStorage.setItem("fav", JSON.stringify(favItems))
        setIsFavRecipe(pre => !pre)
    }

  return (
    <>
    <div className='card-container'>
        {
            allRecipes?.map((item, index) =>{
                return (
                    <div key={index} className='card'>
                        <img src={item.coverImage ? `http://localhost:5000/images/${item.coverImage}` : foodImg} width="120px" height="100px" alt="" />
                        <div className='card-body'>
                            <div className='title'>{item.title}</div>
                            <div className='icons'>
                                <div className='timer'><ImStopwatch/>{item.time}min</div>
                                {(!path) ? <FaHeart onClick={() => favRecipe(item)}
                                style={{color:(favItems.some(res => res._id === item._id)) ? "red" : ""}}    /> :
                                <div className='action'>
                                <Link to={`/editRecipe/${item._id}`} className="editIcon"><MdEditSquare /></Link>
                                <MdDeleteForever className='deleteIcon' onClick={()=> onDelete(item._id)}/>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
    </>
  )
}


