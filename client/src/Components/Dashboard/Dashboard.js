import React, {useContext} from 'react'
import { Recipe } from '../Helper/context';
import Login from '../Home/Login';

function Dashboard() {
  const { currentUser } = useContext(Recipe)
  
  if (!currentUser) return <Login/>;

  return (
    <div>

    </div>
  )
}

export default Dashboard; 