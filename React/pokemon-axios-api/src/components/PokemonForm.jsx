import React, {useState, useEffect} from 'react';
import axios from 'axios';

const PokemonForm = () => {
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState(false);

  const handleClick=()=>{
    setClicked(!clicked);
  }

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response=>{setPokemon(response.data.results)})
    
  }, [clicked])
  
  return ( 
    <div  style={{marginLeft:"39%", marginTop:"3%"}}>
      <button  onClick={handleClick} style={{backgroundColor:"red", color:"white",width:"150px", height:"30px"}}>Fetch Pokemon</button>
{
      
      clicked && pokemon.map((pok,id)=> { return (<p key={id}>{pok.name}</p>)})
  } 

 </div>
  )
}

export default PokemonForm

