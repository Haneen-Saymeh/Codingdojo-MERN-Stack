import React from 'react';
import List from '../components/List';
import  { useEffect, useState } from 'react';
import axios from 'axios';

const Main = () => {

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

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id != authorId));
    }


  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}  >
      {loaded && <List authors={authors}  removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main
