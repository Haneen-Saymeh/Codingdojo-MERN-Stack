import React, { useState, useEffect } from 'react'

const PokemonName = () => {
    const [pokemon,setPokemon] = useState([]);
    const [clicked, setClicked] = useState(false);

    const handleClick=()=>{
       
        setClicked(!clicked);
        
    }

    useEffect(() => {
        fetch('https://pokeapi.co/api/v2/pokemon')
        .then(response=>response.json())
        .then(response=> setPokemon(response.results))
    },[clicked]);
    
  return (
    <div style={{marginLeft:"37%",  marginTop:"3%"}}>
      
        <button  onClick={handleClick} >Fetch Pokemon</button>
     
     {
      
     clicked && pokemon.map((pok,id)=> {  return (<p key={id}>{pok.name}</p>)

        })}
        
      
      
    </div>
  );
}


export default PokemonName

