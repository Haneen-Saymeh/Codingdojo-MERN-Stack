import React, {useState} from 'react'

const ShowTask = (props) => {
    const [items, setItems] = useState(props.data);
    const [isdone, setisDone] = useState(false);
   

    const handleClick=(x)=>{
       props.removetasks(x);


    }

    const handleCheck=(z)=>{
      console.log()


    }
  return (
    <div style={{marginLeft:"37%", marginTop:"3%"}} >
        <ul>
            {props.data.map((item,idx)=> { return <div key={idx}><li >{item}</li>
            <button onClick={e=>handleClick(idx)}>Delete</button>
            <input type="checkbox" checked={isdone}  onClick={e=>handleCheck(idx)}    onChange={e=> setisDone(e.target.checked)} />
            </div>
})}
      </ul>
    </div>
  )
}

export default ShowTask
