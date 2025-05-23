import React, { useState } from 'react'

function QuestionTwo() {
    console.log("App re-rendered", Math.random())
    const [value, setValue] = useState({
        value: 0,
    })

    // react re-rendered when new value is not same as old value
    // new value !== old value (yes re-rendered)

    // react not re-rendered when new value and old value is same
    // new value === old value (no re-rendered)

    const handleClick = ()=>{
        //console.log("logged") // no re-rendered
        //setValue(value + 1) // yes re-rendered
        //setValue(1) // no re-rendered
        //setValue(3) // yes re-rendered
        //setValue({value: 0}) // yes re-rendered
    }
  return (
    <div>
        <h1>{value.value}</h1>
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default QuestionTwo

