import React, {useContext} from 'react'
import { Recipe } from '../Helper/context';
import Login from '../Home/Login';

function Dashboard() {
  const { currentUser } = useContext(Recipe)
  
  if (!currentUser) return <Login/>;

  return (

    <div className='image h-screen w-screen bg-cover bg-no-repeat flex flex-col justify-between'>
      <div className='text-3xl py-12 text-red-900 text-center'>
        <h1>FOOD RECIPEs</h1>
        </div>
        

      
    </div>
  )
}

export default Dashboard; 