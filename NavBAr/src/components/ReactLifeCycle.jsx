import React from 'react'
import { useState, useEffect } from 'react'
//import Life from './Life';

export default function ReactLifeCycle() {
const [count, setCount]=useState(0);
useEffect(()=>{
    console.log('Component did Mounted');
},[count]);

  return (
     <>
    <div>{count}</div>

    <div className='flex gap-2'><button className='bg-black text-white p-2 rounded-lg' onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    <button className='bg-black text-white p-2 rounded-lg' onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
    </div>
   {/* <Life/> */}
  </>
  )
}
