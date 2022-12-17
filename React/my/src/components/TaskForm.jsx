import React, { useState } from 'react'

const TaskForm = (props) => {
    const[task, setTask] = useState({});

    const handleInput=(e)=>{
        setTask({
            inTitle: e.target.value,
            completed:false,
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.myfun(task)

    }

  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}>
      <form  onSubmit={handleSubmit}>
       
    <input type="text" onChange={handleInput}/>
            
      
        <button>Add</button>
      </form>
    </div>
  )
}

export default TaskForm
