import { useState } from 'react'
import './App.css'
function App() {
const [count,setCount]=useState(0)
function expensiveTask(num)
{
  console.log("Inside expensive task")
  for(let i=0; i<=100000000000;i++)
  
  return num*2
}
let doubleValue=expensiveTask(4)
  return (
    <>
    <button onClick={()=> setCount(count+1)}>Increment</button>
    <div>
      count is :{count}
    </div>
    <div>
      Double value is {doubleValue}
    </div>
    </>
  )
}

export default App
