import React from 'react';
import  { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const Update = (props) => {

    const [name, setName] = useState("");
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + props.id)
            .then(res => {
                setName(res.data.name);
               
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + props.id, {
            name
           
        })
        .then(res => {
            console.log(res);
            navigate("/")})
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
        
      <form onSubmit={updateAuthor}  style={{marginLeft:"39%", marginTop:"3%"}}>
      {errors.map((err, index) => <p key={index}>{err}</p>)}
      
            <p>
                <label>Name</label><br/>
                <input type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}/>
            </p>
           
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Update
