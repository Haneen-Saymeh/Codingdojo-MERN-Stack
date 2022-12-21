import React from 'react'
import { navigate } from '@reach/router';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form';

const New = (props) => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const createAuthor = author => {
        axios.post('http://localhost:8000/api/authors/new', author)
            .then(res=>{
                setAuthors([...authors, res.data]); navigate("/")})
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
      <Form   onSubmitProp={createAuthor} errors={errors} />
    </div>
  )
}

export default New
