import React from 'react';
import {Link} from '@reach/router';
import  { useEffect, useState } from 'react';

const Form = (props) => {

    const [name, setName] = useState("");

    const onSubmitHandler = e => {
       
        e.preventDefault();
        props.onSubmitProp({name});
        
    }


  return (
    <div>
      <Link to={"/" }  style={{marginLeft:"39%", marginTop:"1%"}}>Home</Link>
      <form onSubmit={onSubmitHandler}  style={{marginLeft:"39%", marginTop:"3%"}}>
      {props.errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
           
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form
