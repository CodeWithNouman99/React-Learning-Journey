import React, { useEffect, useState } from 'react'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Setinterval executed")
      setSeconds(prevSeconds => prevSeconds + 1)
    }, 1000)  //This is 1 second

    // cleanup
    return () => {
      console.log("Its time to stop")
      clearInterval(intervalId)
    }
  }, []) // dependency array and empty array means it will runs on first render only

  return (
    <div>
      <h1>Timer: {seconds}</h1>
    </div>
  )
}

export default Timer