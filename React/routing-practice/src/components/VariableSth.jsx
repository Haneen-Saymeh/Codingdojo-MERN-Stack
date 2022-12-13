import React from 'react'
import {Link} from '@reach/router';

const VariableSth = (props) => {
  return (
    <div style={{marginLeft:"39%"}}>
        <Link to ="/home">Home</Link>
        {isNaN(props.var)?
      <h1>The word is : {props.var}</h1>:
      <h1>The number is: {props.var}</h1>
        }
    </div>
  )
}

export default VariableSth
