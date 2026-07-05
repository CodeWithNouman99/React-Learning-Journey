import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate=useNavigate()
  function handleclick()
  {
    navigate("/DashBoard")
  }
  return (
    <div>
      About page
      <button onClick={handleclick}>Move to DashBoard page</button>
    </div>
  )
}

export default About
