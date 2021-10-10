import React from 'react'
import "./styles/index.scss"

const ReactDemo = () => {
  const handleClick = () => {
    console.log("click!")
  }
  return <button onClick={handleClick} className={"btn"}>Hello Ian</button>
}

export default ReactDemo;
