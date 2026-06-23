import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

const Card = () => {
  const user = useContext(UserContext)
  console.log(user) // ✅ should log { name: "Leela", age: 21 }

  return (
    <div className="card">
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
    </div>
  )
}

export default Card
