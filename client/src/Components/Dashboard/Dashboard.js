import React, {useContext, useState} from 'react'
import { Recipe } from '../Helper/context';
import Login from '../Home/Login';

const initialvalue = {
  title: '',
  instructions: '',
  time_to_complete: '',
  user_id: 0
}

function Dashboard() {
  const { currentUser  } = useContext(Recipe)
  const [formData, setFormData] = useState(initialvalue)
  
  function handleChange(e) {
    setFormData({
      ...formData, 
      [e.target.name]: e.target.value
    })
  }
  function handleSubmit(e) {
    e.preventDefault()
    fetch('/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(formData)
    }).then(res =>{
      console.log(res)
    })
  }

  if (!currentUser) return <Login/>;

  return (

    
    <div className='image h-screen w-screen bg-cover bg-no-repeat flex flex-col justify-between'>
      <div className='text-3xl py-12 text-red-900 text-center'>
        <h1>FOOD RECIPES</h1>
        </div>

        <div className='bg-black/30 backdrop-blur-sm w-screen h-screen flex '>
          <div className='pl-14'>
            Recipes
            <form onSubmit={handleSubmit} className='flex justify-center items-center flex-col'>
              <input type='text' name='title' value={formData.title} onChange={handleChange} placeholder="Enter title..."  className="text-xs text-black pl-1 outline-none border-black border-2 bg-transparent" />
              <input type='text' name='instructions' value={formData.instructions} onChange={handleChange} placeholder="Enter your instructions" />
              <input type='text' name='time_to_complete' value={formData.time_to_complete} onChange={handleChange} placeholder="Enter time..."/>
              <button type='submit'>Create Recipe</button>
            </form>

          </div>
        </div>
    </div>
  )
}

export default Dashboard; 