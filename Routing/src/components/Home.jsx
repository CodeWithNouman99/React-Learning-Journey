import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate=useNavigate()
  function handleclick()
  {
    navigate('/About')
  }
  return (
    <div>
      Home page
      <button onClick={handleclick}>Move to About page</button>
    </div>
  )
}

export default Home
