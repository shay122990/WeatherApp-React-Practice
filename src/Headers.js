import React from "react"

function Headers(props) {
  return (
    <div>
      <h1>{props.temp}℃</h1>
      <h1>{props.isRaining}</h1>
    </div>
  )
}

export default Headers
