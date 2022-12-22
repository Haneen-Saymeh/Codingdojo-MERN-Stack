import React, {useState} from 'react'

const Form = (props) => {
    const [username, setuserName] = useState("");

    const submitHandle=(e)=>{
        e.preventDefault();
        props.submitName(username);
    }

  return (
    <div   style={{marginLeft:"39%", marginTop:"3%"}}>
        <form onSubmit={submitHandle}  >
            <p>Enter your user name:</p>
            <input type="text" onChange={e=>setuserName(e.target.value)}   />
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Form
