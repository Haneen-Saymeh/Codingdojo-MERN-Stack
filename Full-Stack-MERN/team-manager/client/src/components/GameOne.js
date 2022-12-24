import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GameOne = () => {


        const [players, setPlayers] = useState([]);
        const [player, setPlayer] = useState("");
        const [loaded, setLoaded] = useState(false);
        const  [game1, setGame1] = useState("");
        const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    
        useEffect(()=>{
            axios.get('http://localhost:8000/api/players')
                .then(res=>{
                    setPlayers(res.data);
                    setLoaded(true);
                })
                .catch(err => console.error(err));
        },[players]);


       


      const handle1 = i => {
        
        axios.put('http://localhost:8000/api/players/' + i, {
          
           
            game1: "playing",
            
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const handle2 = i => {
     
      axios.put('http://localhost:8000/api/players/' + i, {
        
         
          game1: "not playing",
          
      })
          .then(res => console.log(res))
          .catch(err => console.error(err));
  }

  const handle3 = i => {
    
    axios.put('http://localhost:8000/api/players/' + i, {
      
        
        game1: "undecided",
        
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
    
    
    



  return (
    <div>

<table>
  <thead>
  <tr>
    <th>name</th>
    
    <th>Actions</th>
    
  </tr>
  </thead>
  <tbody>
  
{
   loaded && players.map((player,idx)=> 
  <tr key={idx}>
    <td>{player.name}</td>
    
    <td>

      <button onClick={(e)=>handle1(player._id)} style={{backgroundColor:player.game1=="playing"?"green" :""}}>Playing</button>
      <button onClick={(e)=>handle2(player._id)}  style={{backgroundColor:player.game1=="not playing"?"red" :""}}>Not playing</button>
      <button onClick={(e)=>handle3(player._id)}  style={{backgroundColor:player.game1=="undecided"?"yellow" :""}}  >Undecided</button>
      
      
     </td>
   
  </tr>
)}

</tbody>
 
</table>
      
    </div>
  )
}

export default GameOne
