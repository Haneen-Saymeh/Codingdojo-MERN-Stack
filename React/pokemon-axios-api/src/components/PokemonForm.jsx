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
    .then(response=>setPokemon(response.results))
    
  }, [clicked])
  
  return ( 
    <div>
      <button  onClick={handleClick} >Fetch Pokemon</button>
      {
      
      clicked && pokemon.map((pok,id)=> {  return (<p key={id}>{pok.name}</p>)
 
         })}
         
    </div>
  )
}

export default PokemonForm

