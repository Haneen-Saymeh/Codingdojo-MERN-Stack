import React, {useState, useEffect} from 'react'
import io from 'socket.io-client';

const Form = (props) => {

  
    const [username, setuserName] = useState("");
    

    // useEffect(() => {
     
    //   socket.on("start", data => setWelcome([...welcome,data]));
      
     
        
    //   });

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
