import React from 'react'
import  { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';

const PlayerForm = () => {

    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [errors, setErrors] = useState([]);

    const onSubmitHandler = e => {
        
        e.preventDefault();
       
        axios.post('http://localhost:8000/api/players', {
            name,
            position
        })
            .then(res=>{console.log(res); navigate("/players/list")})
            .catch(err=>{
                const errorResponse = err.response.data.errors; 
                const errorArr = []; 
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
              
                setErrors(errorArr);
            })   
    }



  return (
    <div>

<Link to={"/players/list"}  style={{marginLeft:"39%", marginTop:"1%"}}>Home</Link>
      <form onSubmit={onSubmitHandler}  style={{marginLeft:"39%", marginTop:"3%"}}>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
            <p>
                <label>Name</label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>

            <p>
                <label>Position</label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
           
            <input type="submit"/>
        </form>
      
    </div>
  )
}

export default PlayerForm
