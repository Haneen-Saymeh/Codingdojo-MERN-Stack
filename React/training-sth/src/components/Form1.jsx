import React, { useState } from 'react'

const Form1 = (props) => {
    const [msg, setMsg] = useState("");
    const handleSubmit=(e) =>{
        e.preventDefault();
        props.myfun(msg);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <h3>Welcome to form component</h3>
      <p> <input type="text"  onChange={e=>setMsg(e.target.value)} /> </p>
      <button>Submit!</button>
      </form>
    </div>
  )
}

export default Form1

