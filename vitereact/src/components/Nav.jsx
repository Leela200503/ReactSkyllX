import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='bg-slate-800 font-semibold text-white sticky top-0 z-50 shadow-md px-6 py-4 flex justify-between items-center h-16'>
      
      {/* Brand Logo / Name */}
      <div className='text-xl font-bold tracking-wide text-teal-400'>
        <Link to="/">Namma<span className='text-white'>PG</span></Link>
      </div>

      {/* Navigation Links */}
      <div className='flex gap-8 items-center text-sm tracking-medium'>
        <Link className='cursor-pointer hover:text-teal-400 transition-colors' to="/">Home</Link>
        <Link className='cursor-pointer hover:text-teal-400 transition-colors' to="/about">About Us</Link>
        <Link className='cursor-pointer hover:text-teal-400 transition-colors' to="/products">Find PGs</Link>
        <Link className='cursor-pointer hover:text-teal-400 transition-colors' to="/contact">Contact</Link>
      </div>

    </nav>
  )
}

export default Nav