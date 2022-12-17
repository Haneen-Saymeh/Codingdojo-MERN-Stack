import React from 'react'

const TaskDisplay = (props) => {
    const handleDelete=(x)=>{
        props.deletefun(x);

    }

    const changestatus=(z)=>{
        props.taskDone(z);

    }
  return (
    <div>
      {
        props.data.map((item,id)=>{ return (
            <div key={id}   style={{marginLeft:"39%", marginTop:"3%"}}>
                <p style={{textDecoration: item.completed==true ? "line-through" : " " }}>{item.inTitle}</p>
                <button onClick={e=>handleDelete(id)}  >Delete</button>
                <input type="checkbox" onChange={e=>changestatus(id)} checked={item.completed}/>
            </div>

        )})
      }
    </div>
  )
}

export default TaskDisplay
