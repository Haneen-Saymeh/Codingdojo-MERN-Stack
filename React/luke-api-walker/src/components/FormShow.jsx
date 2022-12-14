import React, { useState } from 'react';
import { navigate } from '@reach/router';
import {Link} from '@reach/router';



const FormShow = () => {
    const [selectedoption, setSelectedOption]=useState("");
    const [inputnum, setinputNum] = useState();
    


    const handelSearch =(e)=>{
        e.preventDefault();
        navigate(`/${selectedoption}/${inputnum}`);
    }


  return (
    <div style={{marginLeft:"39%", marginTop:"3%"}}>
      <form onSubmit={handelSearch}>
<label>Search for:</label>
            <select  onChange={e => setSelectedOption(e.target.value)}>
            <option  > Select one</option>
               <option  value="people"> people</option>
               <option   value="planets">planets</option>
               <option   value="starships">starships</option>
              
            </select>
            <label> ID: 
                <input type="text" onChange={e => setinputNum(e.target.value)}  /> 
            </label>
            <button>Search</button>
        </form>

        <Link to ="/"  style={{marginLeft:"20%"}}>Search More</Link>
    </div>
  )
}

export default FormShow
