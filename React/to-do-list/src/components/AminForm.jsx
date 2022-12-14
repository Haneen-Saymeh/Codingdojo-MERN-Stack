import React, { useState } from 'react'

const AminForm = (props) => {
    const [todo, settodo] =useState({});


    const fun1=(e)=>{
        settodo({

            text:e.target.value,
            completed:false,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.myfun(todo);
    }



  return (
    <div style={{marginLift:"39%", marginTop:"3%"}}>
<form  onSubmit={handleSubmit}>
      <input type="text"  onChange={fun1}/>
      <button>Submit</button>
      </form>
    </div>
  )
}

export default AminForm


