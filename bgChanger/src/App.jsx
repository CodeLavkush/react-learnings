import React, { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')

  const handleRedChange = (e)=>{
    let btnColor = e.target.innerText.toLowerCase()
    setColor(btnColor)
  }


  return (
    <>
      <div className='w-[100vw] h-[100vh] flex justify-center items-end p-10' style={{backgroundColor: color}}>
        <div className='w-full h-10 flex justify-center items-center p-1 rounded-2xl gap-10 bg-white shadow-xl'> 
          <button onClick={handleRedChange} className='bg-red-600 btn'>Red</button>
          <button onClick={handleRedChange} className='bg-orange-600 btn'>Orange</button>
          <button onClick={handleRedChange} className='bg-purple-600 btn'>Purple</button>
          <button onClick={handleRedChange} className='bg-blue-600 btn'>Blue</button>
          <button onClick={handleRedChange} className='bg-cyan-600 btn'>Cyan</button>
          <button onClick={handleRedChange} className='bg-yellow-600 btn'>Yellow</button>
          <button onClick={handleRedChange} className='bg-indigo-600 btn'>Indigo</button>
          <button onClick={handleRedChange} className='bg-green-600 btn'>Green</button>
          <button onClick={handleRedChange} className='bg-black btn'>Black</button>
          <button onClick={handleRedChange} className='bg-pink-600 btn'>Pink</button>
        </div>
      </div>
    </>
  )
}

export default App
