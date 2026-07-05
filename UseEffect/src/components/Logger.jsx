import React, { useEffect, useState } from 'react'

const Logger = () => {
  const [count,setcount]=useState(0)
  useEffect(()=>
  {
    console.log("Component rendered or count changed",count)
  })        
  // This useeffect runs on every render
  return (
    <div>
      <h1>count is {count}</h1>
      <button onClick={()=>setcount(count+1)}>Increment</button>
    </div>
  )
}

export default Logger
