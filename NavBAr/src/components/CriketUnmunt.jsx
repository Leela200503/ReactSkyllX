import React from 'react'
import { useEffect } from 'react'
const CriketUnmunt = () => {
    useEffect(()=>{
    console.log("Criket component mounted");
    return ()=>{
        console.log("Criket component unmounted");
    }
},[])

  return (
    <div>
        <img className='w-50 h-50' src="https://media.istockphoto.com/id/154908271/photo/cricket-wickets-ball-and-bat.webp?a=1&b=1&s=612x612&w=0&k=20&c=rOYBnmC8WXBKXEH4T37_dUQYP-vKy6S9SXE5Q8-tl5E=" alt="Cricket" />
        
    </div>
  )
}

export default CriketUnmunt;