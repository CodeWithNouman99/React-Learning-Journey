import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'
function App() {
const [isLoggedin,setLoggedin]=useState(false)
// if(isLoggedin)
// {
//   return(
//     <LogoutBtn></LogoutBtn>
//   )
// }
// else
// {
//   return(
//     <isLoggedin></isLoggedin>
//   )
// }

if(!isLoggedin)
{
  return(
    <LogoutBtn></LogoutBtn>
  )
}

return(
  <>
  {/* {isLoggedin ? <LogoutBtn></LogoutBtn>: <LoginBtn></LoginBtn>} */}
  {/* {isLoggedin && <LogoutBtn></LogoutBtn>} */}

  </>
)
}

export default App
