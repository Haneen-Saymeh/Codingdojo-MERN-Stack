import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

const Chat = (props) => {
    const [socket] = useState(() => io(':8000'));
    const [txt, setTxt] = useState("");
    const [msgs, setMsgs] = useState([]);
    const [join, setJoin] = useState("");


    useEffect(() => {
     
      socket.on('start', data => console.log(data));
      socket.on('join', data => setJoin([...join,data]));
      socket.on('chat', data => setMsgs([...msgs,data]));

     
        
      });

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        socket.emit("chat" , props.name+" "+ "wrote"+" "+txt);
        socket.emit("join" , props.name+" "+ join);
    }



  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}  >
       <p>{props.name} {props.welcome}</p>
       

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
