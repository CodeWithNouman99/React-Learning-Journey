import React from 'react'

const Card = (props) => {
  return (
    <div>
      <h1>Child Component</h1>
      <input type="text" onChange={(e)=>props.setname(e.target.value)} className='border-r-blue-500' />
      <p className='text-3xl font-bold'>Name State variable ki value inside Card : {props.name}</p>
    </div>
  )
}

export default Card
