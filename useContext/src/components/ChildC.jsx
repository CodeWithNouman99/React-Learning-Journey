import React, { useContext } from 'react'
import { contextTheme } from '../App'
const ChildC = () => {
  // const user=useContext(userContext)
  const [theme,settheme]=useContext(contextTheme)
  function changetheme()
  {
    if(theme==="Light")
      settheme('Dark')
    else
      settheme("Light")
  }
  return (
    <div>
      <button onClick={changetheme}>Change Theme</button>
    </div>
  )
}

export default ChildC
