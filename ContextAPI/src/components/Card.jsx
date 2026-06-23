import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Card = () => {
  const users = useContext(UserContext)
  console.log(users) 

  return (
    <div className="card">
     
    </div>
  )
}

export default Card
