import React from 'react'

function Navbar() {
  return (
    <>
    <nav className="sticky top-0 z-50">
        <div className="flex items-center justify-between px-5 py-3 bg-gray-200 h-16">
        <div className='flex items-center justify-between gap-10'>
            
            <img src="https://skyllx.com/assets/newnewlogo-DH30CN7D.png" alt="Vite Logo" className="w-70 h-10 pl-10" />
            <h3>Explore Courses</h3>
            <div className='flex items-center border-2 border-gray-300 bg-white rounded-xl'>
            <input type="text" placeholder='Search for courses' className=' px-4 py-2 rounded-xl' />
            <img src="https://static.vecteezy.com/system/resources/previews/020/120/837/original/search-icon-simple-style-web-searching-background-symbol-search-brand-logo-design-element-search-t-shirt-printing-for-sticker-free-vector.jpg" alt="" className="w-10 h-10 rounded-xl" />
            </div>
            </div>
            <div >
                <ul className='flex items-center gap-7 pr-7 '>
                    <li className='cursor-pointer'>Hire From Us</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>IT Services</li>
                    <li className='border border-gray-600 rounded-lg hover:bg-cyan-600  px-4 py-2 cursor-pointer'>Log In</li>
                    <li className='border border-gray-600 rounded-lg hover:bg-slate-600 bg-blue-950 text-white px-4 py-2 cursor-pointer'>Sign Up</li>
                </ul>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar;