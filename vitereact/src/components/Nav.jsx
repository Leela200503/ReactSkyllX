import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-orange-400 flex justify-evenly h-10 m-0 sticky p-2'>
        <Link className='cursor-pointer hover:underline' to={"/"}>Home</Link>
        <Link className='cursor-pointer hover:underline' to={"/about"}>About</Link>
        <Link className='cursor-pointer hover:underline' to={"/contact"}>Contact</Link>
        <Link className='cursor-pointer hover:underline' to={"/products"}>Products</Link>

    </nav>

  )
}

export default Nav