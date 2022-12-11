import React, { useState } from 'react'

const TapForm = () => {

    const mytap= [{label:"Tab 1", content:"Tab1 content is showing here"},
    {label:"Tab 2", content:"Tab2 content is showing here"},
    {label:"Tab 3", content:"Tab3 content is showing here"}];
    const [display, setDisplay] = useState("");

    const handelClick=(e,x)=>{
        setDisplay(x.content);

    }
  return (
    <div>
    {
        mytap.map((item,id) =>
            <>
            <p key={id}  onClick={e=>handelClick(e,item)} >{item.label}</p>
           
            </>
        )};
         <p>{display}</p>
    
    </div>
  );
}

export default TapForm

