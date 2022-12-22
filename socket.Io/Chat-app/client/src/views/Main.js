import React, { useState } from 'react'
import Chat from '../components/Chat'
import Form from '../components/Form'

const Main = () => {
    const [name,setName] = useState("");

    
  return (
    <div>
       {!name? <Form   submitName={setName}  />: ""}
       {name?<Chat name={name}  />:"" }
  
      
    </div>
  )
}

export default Main
