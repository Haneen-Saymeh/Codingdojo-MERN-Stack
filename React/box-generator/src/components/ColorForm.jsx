import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();
        props.liftfunc(color);


    }
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <lable><input  type="text" onChange={e=> setColor(e.target.value)} />Color</lable>
            <button>Add</button>
        </form>
      
    </div>
  )
}

export default ColorForm
