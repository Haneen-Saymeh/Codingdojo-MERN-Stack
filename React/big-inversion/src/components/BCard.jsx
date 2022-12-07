import React from 'react'

const 
BCard = (props) => {
  return (
    <div className='main'>
      <h1>{props.firstname}  {props.lastname}</h1>
      <p>Age: {props.age}</p>
      <p>Hair color: {props.hair}</p>
    </div>
  )
}

export default BCard;


