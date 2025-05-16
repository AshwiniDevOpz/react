import React, { useEffect, useState } from 'react'
import './useeffect.css'

const Useeffect = () => {
  const [count, setCount] = useState(100)

  useEffect(() => {
    console.log("useEffect is called")
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1)
    }, 1000)

    return () => {
      clearInterval(interval)
      console.log("useEffect is cleaned up")
    }
  }, [])

  return (
    
    <div className='useeffect'>
      <h1>useEffect</h1>
      <h2 className='count'>Count: {count}</h2>
      <button onClick={() => setCount(100)} className='btn-1'>setCount</button>
      <button onClick={() => setCount(0)} className='btn-2'>Reset</button>
    </div>
    
  )
}

export default Useeffect
