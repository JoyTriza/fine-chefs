import React from 'react'
import Navbar from '../Navbar';
import Quote from './Quote';

function Landing() {
  return (
    <div className='land h-screen w-screen bg-cover bg-no-repeat flex flex-col justify-between'>
        <Navbar/>
        <div className='flex justify-end my-24'>
          <div className='md:w-1/3'>
            <Quote/>
          </div>
        </div>
    </div>
  )
}

export default Landing;