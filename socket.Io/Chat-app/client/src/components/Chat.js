import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [txt, setTxt] = useState("");
    const [msgs, setMsgs] = useState([]);


    useEffect(() => {
     
       
        socket.on('chat', data => setMsgs([...msgs,data]));
     
        
      });

    const handleSubmit=(e)=>{
        e.preventDefault();
        socket.emit("chat" , props.name+" "+ "wrote"+" "+txt);


        

    }
  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}  >
        {
            msgs.map((msg,i)=>
                <p key={i}>{msg}</p>
            )
        }
        <form onSubmit={handleSubmit}  >
            <p>Start Chatting!!</p>
            <input type="text" onChange={e=>setTxt(e.target.value)} />
            <button>Submit</button>
        </form>
      
    </div>
  )
}

export default Chat
