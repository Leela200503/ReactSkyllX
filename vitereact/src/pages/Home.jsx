import React from 'react'

const Home = () => {
  return (
    // 1. Added 'relative' so absolute children position themselves relative to this box
    // 2. Added 'w-full h-[500px]' to give the hero banner a distinct height
    <div className='relative w-full h-[500px] overflow-hidden image-container'>
      
      {/* Background Image: Styled to cover the container perfectly */}
      <img 
        src="https://tse3.mm.bing.net/th/id/OIP.EAz3zhJ4W3ca1LGj2T898AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3" 
        alt="Bengaluru Banner" 
        className="object-cover w-full h-full"
      />
      
      {/* Dark Overlay Tint: Makes the image slightly darker so white text pops */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 
        Text and Search Bar Wrapper Box: 
        Centered perfectly inside the banner using absolute positioning & flexbox
      */}
      <div className='absolute inset-0 flex flex-col items-center justify-center p-4 image-overlay-text'>
        
        {/* Text Section */}
        <div className='max-w-3xl mb-6 text-center text-white'>
          <h1 className='mb-3 text-3xl font-bold md:text-4xl'>
            Find Your Perfect PG in Bengaluru. No Hassle. No Hidden Fees.
          </h1>
          <p className='text-sm opacity-90 md:text-base'>
            Discover fully furnished, tech-enabled, and affordable PG accommodations near tech parks, colleges, and metro stations across Bangalore.
          </p>
        </div>
        
        {/* Search Bar Grid Container */}
        <div className='flex flex-col w-full max-w-4xl gap-3 p-4 bg-white rounded-lg shadow-lg md:flex-row m-3 justify-center items-center'>
          <input className='w-full p-2 border rounded md:w-1/4' type="search" placeholder='Select Locality' />
          <input className='w-full p-2 border rounded md:w-1/4' type="search" placeholder='Sharing Type' />
          <input className='w-full p-2 border rounded md:w-1/4' type="search" placeholder='Gender' />
          <button className='w-full px-6 py-2 text-white bg-orange-500 rounded font-semibold hover:bg-orange-600 transition-colors md:w-auto'>
            Search
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home