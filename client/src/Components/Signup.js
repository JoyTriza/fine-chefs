import React from 'react'

function Signup() {
  return (
    <div>
        <form className='h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-around h-1/5 w-1/2'>
            <input type='first-name' placeholder='First-name...' className='outline-none border-black border-2 bg-transparent'/>  
            <br/> 
            <input type='last-name' placeholder='Last-name...' className='outline-none border-black border-2 bg-transparent'/>   
            <br/>      
            <input type='email' placeholder='Email...' className='outline-none border-black border-2 bg-transparent'/>  
            <br/>    
            <input type='password' placeholder='Password...' className='outline-none border-black border-2 bg-transparent'/>
            <br/>
            <input type='Confirm password' placeholder='Confirm Password...' className='outline-none border-black border-2 bg-transparent'/>
            <br/>
            <div className='flex justify-end'>
                <button className='border-solid border-2 px-2 hover:text-red-500'>Signup</button>
            </div>
            </div>
        </form>
    </div>
  )
}

export default Signup