import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
function App() {
//Manage State
//Create State
//Change State
//Sabhi child me state ko sync karwadonga
const [name,setname]=useState("")
  return (
    <>
      <h1 className='bg-amber-300 text-4xl border-4 mt-15 w-full text-center'>State Lifting!</h1>
      <Card name={name} setname={setname}></Card>
      <p>I am inside Parent Component value of name is: {name}</p>
    </>
  )
}

export default App
