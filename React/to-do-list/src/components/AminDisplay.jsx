import React from 'react'

const AminDisplay = (props) => {
  return (
    <div style={{marginLift:"39%", marginTop:"3%"}}>
      {
        props.todos.map((item,idx)=>{ return <div key={idx}><p >{item.text}</p>
        <input type="checkbox" checked={item.completed} onChange={e=>props.updateTasks(idx)}/>
        <button  onClick={e=>props.deleteTasks(idx)}>Delete</button>
        </div>})
      }
    </div>
  )
}

export default AminDisplay
