import React from 'react'

const Recipes = ({recipes, deleteRecipe}) => {
    
  return (
    <div className='grid grid-cols-2 gap-10'>
        {
            recipes.length > 0 ? (recipes.map((recipe)=>(
                <div key={recipe.id} className='mt-4 bg-red-400 items-center border rounded'>
                    <h4 className='text-xl text-center py-2'>{recipe.title}</h4>
                    <img src={recipe.image_url} alt={recipe.title} className='w-full h-2/3' />
                    <p className='px-4 my-3 text-lg'>{recipe.instructions}</p>
                    <p className='px-4'>Takes {recipe.time_to_complete} minutes to complete</p>
                    <p className='px-4 text-sm'>Posted By: {recipe.user.first_name} {recipe.user.last_name}</p>
                    <button style={{backgroundColor: 'red'}} onClick={()=>deleteRecipe(recipe.id)}>Delete Post</button>
                </div>
            ))):(
                <div>No recipes available</div>
            )
        }
    </div>
  )
}

export default Recipes



