import React, { useState } from 'react'
import { AddTodo, Todos } from './components'

function App() {
  return (
    <>
        <div className='w-full px-4 text-center text-white'>
          <h1>Redux Toolkit</h1>
          <AddTodo/>
          <Todos/>
        </div>
    </>
  )
}

export default App
