import React from 'react'
import { useEffect,useState } from 'react'

const SoccerUnmunt = () => {
useEffect(()=>{
    console.log("Soccer component mounted");
    return ()=>{
        console.log("Soccer component unmounted");
    }
},[])

  return (
    <div>
        <img className='w-50 h-50 ' src="https://th.bing.com/th/id/OIP.6ylejjG61INxj44o4C4DgQHaEO?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Soccer" />
       
    </div>
  )
}

export default SoccerUnmunt;