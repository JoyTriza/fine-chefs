import React, {useContext, useEffect, useState} from 'react'
import { Recipe } from '../Helper/context';
// import Login from '../Home/Login';
import Recipes from './Recipes';
import { storage } from '../../Firebase/firebase'

const initialvalue = {
  title: '',
  instructions: '',
  time_to_complete: '',
  user_id: 0,
  image_url: ''
}

function Dashboard() {
  const { currentUser  } = useContext(Recipe)
  const [formData, setFormData] = useState(initialvalue)
  const [image, setImage] = useState('')
  const [progress, setProgress] = useState(0)
  const[isUrl, setIsUrl] = useState(true)

  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
      fetch('/recipes').then(res=>res.json()).then(setRecipes)
  },[]) 
  
  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }
 
  function deleteRecipe(id) {
        fetch(`/recipes/${id}`, {
            method: 'DELETE'
        })
        const remaining_recipes = recipes.filter((recipe)=>recipe.id !== id)
        setRecipes(remaining_recipes)
    }

  const handleImageChange = (e) => {
    if(!e.target.files) return
    setImage(e.target.files[0])
  }

  const handleImageUpload = () => {
    if(!image) return
    setIsUrl(false)
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress)
      },
      error => {
        console.log(error)
      },
      () => {
        storage.ref("images").child(image?.name).getDownloadURL().then(url => {
          setFormData({
            ...formData,
            user_id: currentUser.id,
            image_url: url
          })
          setIsUrl(true)
        })
      }
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isUrl){
      console.log("This is the data: ", formData)
      fetch('/recipes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }, 
        body: JSON.stringify(formData)
      }).then(res => res.json())
      .then(recipe => {
        setRecipes([...recipes, recipe])
        setFormData(initialvalue)
      })
    }
  }


  // if (!currentUser) return <Login/>;

  return (

    
    <div className='image w-screen bg-cover bg-no-repeat flex flex-col justify-between'>
      <div className='text-3xl py-12 text-red-900 text-center'>
        <h1>FOOD RECIPES</h1>
        </div>

        <div className='bg-black/30 backdrop-blur grid grid-cols-12 gap-5 px-8' style={{minHeight: "100vh"}}>
          <div className=' col-span-4'>
            <p className='pt-4 text-xl'>Create Your Recipe:</p>
            <form onSubmit={handleSubmit} className='flex flex-col '>
              <input className='mt-4 py-2 px-3 rounded' type='text' name='title' value={formData.title} onChange={handleChange} placeholder="Enter title..."/>
              <input className='mt-4 py-2 px-3 rounded' type='text' name='instructions' value={formData.instructions} onChange={handleChange} placeholder="Enter your instructions" />
              <input className='mt-4 py-2 px-3 rounded' type='text' name='time_to_complete' value={formData.time_to_complete} onChange={handleChange} placeholder="Enter time..."/>
              <input className='mt-4 py-2 px-3 rounded' type="file" name="image_url" onChange={handleImageChange}/>
              <button className='bg-blue-500 mb-3 rounded p-3' onClick={handleImageUpload}>{!isUrl ? "Uploading..." : "Upload image"}</button>
              <button type='submit' className='bg-blue-500 rounded p-3'>Create Recipe</button>
            </form>

          </div>

          <div className='col-span-8'>
            <Recipes recipes={recipes} deleteRecipe={deleteRecipe}/>            
          </div>
        </div>
    </div>
  )
}

export default Dashboard; 