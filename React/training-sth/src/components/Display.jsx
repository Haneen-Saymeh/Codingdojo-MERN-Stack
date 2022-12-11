import React from 'react'

const Display = (props) => {
  return (
    <div>
        <h3>Welcome to the Display component!</h3>
      <p  style={{color:props.data}}>{props.data}</p>
    </div>
  )
}

export default Display
