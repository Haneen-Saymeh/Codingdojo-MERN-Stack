import React from 'react';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import { navigate } from '@reach/router';
import DeleteButton from '../components/DeleteButton';

const PlayerList = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id != playerId));
    }


  return (
    <div style={{marginLeft:"37%", marginTop:"3%"}}>
        <Link to={"/players/addplayer" } >Add new Player</Link>
      <table class="table" >
        <thead class="thead-dark">
  <tr>
    <th>name</th>
    <th>Position</th>
    <th>Actions</th>
    
  </tr>
  </thead>
{
   loaded && players.map((player,i)=> 
  <tr key={i}>
    <td>{player.name}</td>
    <td>{player.position}</td>
    <td>          
<DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/> </td>
   
  </tr>
)}
 
</table>
    </div>
  )
}

export default PlayerList


