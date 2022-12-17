import React, { useState } from 'react'

const ColorForm = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState(0);
    const[height, setHeight] = useState(0);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const box = {color, width, height};
        props.liftfunc(box);


    }
  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}>
        <form onSubmit={handleSubmit} >
            <p>Color <input  type="text" onChange={e=> setColor(e.target.value)} /></p> 
            <p>Width <input  type="text" onChange={e=> setWidth(e.target.value)} /></p>
            <p>Height  <input  type="text" onChange={e=> setHeight(e.target.value)} /></p>
            <button  style={{marginLeft:"13%", marginTop:"1%"}}>Add</button>
        </form>
      
    </div>
  )
}

export default ColorForm
