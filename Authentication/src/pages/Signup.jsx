import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
   <div className='m-auto'>
        <form className='flex flex-col gap-5 m-auto '>
            <input className='border  p-1 rounded-lg w-[300px]' type="email" placeholder='Email' />
            <input className='border  p-1 rounded-lg w-[300px]' type='password' placeholder='Password'/>
            <button className='bg-blue-300 w-[300px] text-white rounded-lg w-[300px]' >Singup</button>
            <p>U hava an Account <Link className='text-pink-300 hover:text-red-500'  to={"/login"}>Login</Link> here</p>
        </form>
    </div>
  )
}

export default Signup