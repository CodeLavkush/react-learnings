import React, { useState } from "react";

function QuestionOne() {
  const [value, setValue] = useState(1);
  //const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;

  //if a component state or props changes then the component itself's re-renders

  const handleClick = () => {
    //setMultipliedValue(value * 5);
    setValue(value + 1);
  };
  return (
    <>
      <p>Value: {value}</p>
      <button onClick={handleClick}>Multiply value by 5</button>
      <p>Multiplied Value: {multipliedValue}</p>
    </>
  );
}

export default QuestionOne;
