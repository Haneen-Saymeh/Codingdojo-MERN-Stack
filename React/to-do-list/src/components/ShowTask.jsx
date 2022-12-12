import React, {useState} from 'react'

const ShowTask = (props) => {
    const [items, setItems] = useState(props.data);
   

    const handleClick=(x)=>{
       props.removetasks(x);


    }
  return (
    <div style={{marginLeft:"37%", marginTop:"3%"}} >
        <ul>
            {props.data.map((item,idx)=> { return <div key={idx}><li >{item}</li><button onClick={handleClick(idx)}>Delete</button></div>
})}
      </ul>
    </div>
  )
}

export default ShowTask
