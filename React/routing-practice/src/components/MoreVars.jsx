import React from 'react'
import {Link} from '@reach/router';

const MoreVars = (props) => {
  return (
    <div>
        <Link to ="/home"  style={{marginLeft:"39%"}}>Home</Link>
    <div   style={{marginLeft:"37%", marginTop:"3%",color:props.var2, backgroundColor:props.var3, border:"1px solid black", width:"500px", height:"200px"}}>
      
        {isNaN(props.var1)?
      <h1 >The word is : {props.var1}</h1>:
      <h1>The number is: {props.var1}</h1>
        }
    </div>
    </div>
  )
}

export default MoreVars
