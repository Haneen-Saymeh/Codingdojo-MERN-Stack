import React, { useState } from 'react'

const AddTask = (props) => {
    const [task, setTask] = useState("");
    const [status, setStatus] = useState(false);

    const handlesubmit=(e)=>{
        e.preventDefault();
        props.myfun(task);

    }
  return (
    <div  style={{marginLeft:"37%", marginTop:"3%"}}>
        <form  onSubmit={handlesubmit}>
      <input type="text"  onChange={e=> setTask(e.target.value)} />
      <button>Add Task</button>
      </form>
    </div>
  )
}

export default AddTask


