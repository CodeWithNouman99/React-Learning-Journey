import React from 'react'

const Button = (props) => {
  return (
    <div>
      {props.children}
   <button onClick={props.HandleClick}>
    {props.text}
   </button>
   </div>
  )
}

export default Button
