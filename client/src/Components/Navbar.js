import React from 'react'
import { Link } from 'react-router-dom'



function Navbar() {
  return (
    <div className='logo flex justify-between'>
        <div className='navbar-heading px-3 '>
            <h1>Fine <span className='text-2xl text-yellow-500'>Chef's</span></h1>
        </div>
        <div>
          <ul className='flex justify-between px-2 py-4 flex space-x-4  '>
            <Link to = "login"><li className='hover:text-red-700'>Login</li></Link>
            <Link to = "signup"><li className='text-yellow-500'>SignUp</li></Link>
          </ul>
        </div>
    </div>
  )
}

export default Navbar