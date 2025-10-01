import React from 'react'
import foodRecipe from '../assets/foodRecipe.webp'
import RecipeItems from '../RecipeItems'
import { useNavigate } from 'react-router-dom'


export default function Home() {

  const navigate = useNavigate()

  return (
    <>
    <section className='home'>
        <div className='left'>
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus necessitatibus numquam saepe veniam soluta vel esse reiciendis voluptas! Sunt sed debitis libero iusto impedit distinctio nam? Repellendus tenetur doloremque voluptatem.</h5>
            <button onClick={() => navigate("/addRecipe")}>Share your recipe</button>
        </div>
        <div className='right'>
            <img src={foodRecipe} width="320px" height="300px" alt="" />
        </div>
    </section>
    <div className='bg'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#00cbc9" fillOpacity="1" d="M0,288L60,277.3C120,267,240,245,360,218.7C480,192,600,160,720,176C840,192,960,256,1080,245.3C1200,235,1320,149,1380,106.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
    </div>

    <div className='recipe'>
        <RecipeItems/>
    </div>



    </>
  )
}
