import React from 'react'
import "./UserCard.css"

const UserCard = ({name,description,image}) => {
  return (
    <div className='user-container'>
      <p id='title'>{name}</p>
      <img id='image' src={image} alt="" />
      <p id='description'>{description}</p>
    </div>
  )
}

export default UserCard
