import React, {useState, useEffect} from 'react';
import axios from 'axios';

const GameOne = () => {


        const [players, setPlayers] = useState([]);
        const [loaded, setLoaded] = useState(false);
        const  [status, setStatus] = useState("undecided");
    
        useEffect(()=>{
            axios.get('http://localhost:8000/api/players')
                .then(res=>{
                    setPlayers(res.data);
                    setLoaded(true);
                })
                .catch(err => console.error(err));
        },[]);
    
    
    



  return (
    <div>

<table>
  <tr>
    <th>name</th>
    
    <th>Actions</th>
    
  </tr>
{
   loaded && players.map((player,i)=> 
  <tr key={i}>
    <td>{player.name}</td>
    
    <td>

      <button>Playing</button>
      <button>Not playing</button>
      <button>Undecided</button>
      
      
     </td>
   
  </tr>
)}
 
</table>
      
    </div>
  )
}

export default GameOne
