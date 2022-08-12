import React from 'react'

const Recipes = ({recipes}) => {
    
    console.log(recipes);
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






