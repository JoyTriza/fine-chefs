import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Login() {
const [error, setError] = useState([]);
const[person, setPerson] = useState({
  email:"",
  password: ""
})

const handleChange = (e) => {
    const { name, value } = e.target;
    setPerson({
      ...person,
      [name]: value,
    });
  }

const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/login",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(person)
    })
      .then(res => {
      if(res.ok){
        res.json().then(person => console.log(person))
      } else {
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit} className='h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-around h-1/5 w-3/4 md:w-1/4'>
          <input name='email' value={person.email} onChange={handleChange} type='email' placeholder='Email...' className='text-xs outline-none border-black border-2 bg-transparent px-2 py-1 placeholder:text-black'/>      
          <input name='password' value={person.password} onChange={handleChange} type='password' placeholder='Password...' className='text-xs outline-none border-black border-2 bg-transparent px-2 py-1 placeholder:text-black'/>
          <div className='flex justify-end'>
            <div className='flex flex-col items-end'>
              <button className='border-solid border-2 px-2 hover:bg-red-500 w-1/2'>Log In</button>
              <Link to='../signup' className='hover:text-red-500'>Sign up for Fine-Chef's?</Link>
            </div>
          </div>
          {error ? <p className="orange">{error}</p> : null}
        </div>
      </form>
    </div>
  )
}

export default Login