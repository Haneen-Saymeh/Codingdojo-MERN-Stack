import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GameStatus from './GameStatus';

const GameTwo = () => {


        const [players, setPlayers] = useState([]);
        const [player, setPlayer] = useState("");
        const [loaded, setLoaded] = useState(false);
        const  [game2, setGame1] = useState("");
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
          
           
            game2: "playing",
            
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    const handle2 = i => {
     
      axios.put('http://localhost:8000/api/players/' + i, {
        
         
          game2: "not playing",
          
      })
          .then(res => console.log(res))
          .catch(err => console.error(err));
  }

  const handle3 = i => {
    
    axios.put('http://localhost:8000/api/players/' + i, {
      
        
        game2: "undecided",
        
    })
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
    
    
    



return (
  <div  style={{marginLeft:"37%", marginTop:"3%"}} >
    <GameStatus/>

<table class="table"  style={{width:"500px"}}>
<thead class="thead-dark">
<tr>
  <th scope="col">name</th>
  
  <th scope="col">Actions</th>
  
</tr>
</thead>
<tbody>

{
 loaded && players.map((player,idx)=> 
<tr key={idx}>
  <td>{player.name}</td>
  
  <td>

    <button type="button" class="btn btn-primary" onClick={(e)=>handle1(player._id)} style={{backgroundColor:player.game2=="playing"?"green" :""}}>Playing</button>
    <span>    </span>
    <button type="button" class="btn btn-primary" onClick={(e)=>handle2(player._id)}  style={{backgroundColor:player.game2=="not playing"?"red" :""}}>Not playing</button>
    <span>    </span>
    <button type="button" class="btn btn-primary" onClick={(e)=>handle3(player._id)}  style={{backgroundColor:player.game2=="undecided"?"yellow" :""}}  >Undecided</button>
    
    
   </td>
 
</tr>
)}

</tbody>

</table>
    
  </div>
)
}

export default GameTwo
