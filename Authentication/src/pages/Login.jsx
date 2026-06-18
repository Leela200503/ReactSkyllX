import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [value, setValue]=useState({
        email:"",
        password:""
    });
    const HandleLogin=(e)=>{
        e.preventDefault();
        console.log(value)

    }
  return (
    <div className='m-auto'>
        <form onSubmit={HandleLogin} className='flex flex-col gap-5 m-auto '>
            <input className='border  p-1 rounded-lg w-[300px]' type="email" placeholder='Email' 
            onClick={(e)=>setValue({...value,email:e.target.value})}
            />
            <input className='border  p-1 rounded-lg w-[300px]' type='password' placeholder='Password'/>
            <button className='bg-blue-300 w-[300px] text-white rounded-lg w-[300px]' >Login</button>
            <p>U dont hava an Account <Link className='text-pink-300 hover:text-red-500'  to={"/Signup"}>Singup</Link> here</p>
        </form>
    </div>
  )
}

export default Login