import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = ()=>{

    if(counter < 20){
      setCounter(counter + 1)
    }
    else{
      setCounter(20)
    }
  }

  const subtractValue = ()=>{
    if(counter > 0){
      setCounter(counter - 1)
    }
    else{
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <br />
      <button onClick={subtractValue}>Subtract value</button>
    </>
  )
}

export default App
