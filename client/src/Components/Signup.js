import React, {useState, useContext} from 'react'
import { Link, Navigate } from 'react-router-dom'
import { Recipe } from './Helper/context';

function Signup() {
const [error, setError] = useState([]);
const {setCurrentUser, currentUser
} = useContext(Recipe)
const[person, setPerson] = useState({
  last_name:"", 
  first_name:"",
  email:"",
  password: "",
  password_confirmation:""
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
    fetch("/users",{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(person)
    })
      .then(res => {
      if(res.ok){
        res.json().then(person => setCurrentUser(person))
      } else {
        res.json().then(e => setError(Object.entries(e.error).flat()))
      }
    })
  }

  if (currentUser) return <Navigate to='../dashboard' replace={true}/>;


  return (
    <div>
        <form onSubmit={handleSubmit} className='h-screen flex justify-center items-center'>
            <div className='flex flex-col justify-around h-2/5 w-1/2'>
            <input onChange={handleChange} value= {person.first_name} name='first_name' type='first-name' placeholder='First-name...' className='placeholder:text-xs placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>   
            <input onChange={handleChange} value= {person.last_name} name='last_name' type='last-name' placeholder='Last-name...' className='placeholder:text-xs placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>         
            <input onChange={handleChange} value= {person.email} name='email'type='email' placeholder='Email...' className='placeholder:text-xs placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>      
            <input onChange={handleChange} value= {person.password} name='password' type='password' placeholder='Password...' className='placeholder:text-xs placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>
            <input onChange={handleChange} value= {person.password_confirmation} name='password_confirmation'type='password' placeholder='Confirm Password...' className='placeholder:text-xs placeholder:text-black pl-1 outline-none border-black border-2 bg-transparent'/>
            <div className='flex justify-end'>
                <div className='flex flex-col items-end'>
                  <button type='submit' className='border-solid border-2 border-black px-2 hover:bg-red-500 w-3/4'>Signup</button>
                  <Link to='../login' className='hover:text-red-500'>Already have an account?</Link>
                </div>
            </div>
            {error?.length > 0 && (
              <ul style={{ color: "red" }}>
                {error.map((error) => (
                <li className='ml-2 text-red-400' key={error}>{error}</li>
                ))}
            </ul>
          )}
            </div>
        </form>
    </div>
  )
}

export default Signup