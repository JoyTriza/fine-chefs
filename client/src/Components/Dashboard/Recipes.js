import React, { useEffect, useState } from 'react'

const Recipes = () => {
    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        fetch('/recipes').then(res=>res.json()).then(setRecipes)
    },[]) 
    console.log(recipes);
  return (
    <div>
        {
            recipes.length > 0 ? (recipes.map((recipe)=>(
                <div key={recipe.id}>
                    <h4>{recipe.title}</h4>
                    <p>{recipe.instructions}</p>
                    <p>Takes {recipe.time_to_complete} minutes to complete</p>
                </div>
            ))):(
                <div>No recipes available</div>
            )
        }
    </div>
  )
}

export default Recipes



// const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if(!e.target.files) return
//     if(e.target.files[0]) {
//       setImage(e.target.files[0])
//     }
//   }

//   const handleImageUpload = () => {
//     if(!image) return
//     const uploadTask = storage.ref(`images/${image.name}`).put(image);
//     uploadTask.on(
//       "state_changed",
//       snapshot => {
//         const progress = Math.round(
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100
//         );
//         setProgress(progress);
//       },
//       error => {
//         console.log(error)
//       },
//       () => {
//         storage.ref("images").child(image?.name).getDownloadURL().then(url => {
//           setImageUrl(url)
//         })
//       }
//     )
//   }






