import React from 'react'

function Login() {
  return (
    <div>
      <form className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-around h-1/5 w-1/2'>
          <input type='email' placeholder='Email...' className='outline-none border-black border-2 bg-transparent'/>      
          <input type='password' placeholder='Password...' className='outline-none border-black border-2 bg-transparent'/>
          <div className='flex justify-end'>
            <button className='border-solid border-2 px-2 hover:text-red-500'>Log In</button>
          </div>
        </div>
      </form>
      

    </div>
  )
}

export default Login