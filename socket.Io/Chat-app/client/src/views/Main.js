import React, { useState, useEffect } from 'react'
import Chat from '../components/Chat'
import Form from '../components/Form'
import io from 'socket.io-client';

const Main = () => {
  const [socket] = useState(() => io(':8000'));
    const [name,setName] = useState("");
    const [welcome, setWelcome] = useState("");

    useEffect(() => {
     
      socket.on("start", data => setWelcome([...welcome,data]));
      
     
        
      });

      const submitName=(x)=>{
        setName(x);

        socket.emit("start", name +" "+welcome);

      }

    
  return (
    <div>
       {!name? <Form   submitName={submitName}   welcome ={welcome}/>: ""}
       {name?<Chat name={name}  welcome ={welcome}/>:"" }
  
      
    </div>
  )
}

export default Main
