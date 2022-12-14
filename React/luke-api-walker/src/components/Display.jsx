import React, { useEffect, useState } from 'react';
import axios from 'axios';
import logo from '../assets/Dark.gif';

const Display = (props) => {
    const [starwars, setstarWars] = useState([]);
    const [loaded,setLoaded] = useState("");
    const [err,setErr] = useState("");

    useEffect(()=>{
    axios.get("https://swapi.dev/api/"+props.cat+"/"+props.id)
        .then(response=>{setstarWars(response.data); console.log(response.data)})
        .catch(errr=> {setErr(errr)});
        
},[props.cat, props.id])

  return (
    <div  style={{marginLeft:"39%", marginTop:"3%"}}>
        {
            err?
            <img src={logo} alt="loading..." />:
            (props.cat=="people")?
<div> <h3>Name:  {starwars.name}</h3>
<p>Height: {starwars.height}</p>
<p>Mass: {starwars.mass}</p>
<p>Skin Color: {starwars.skin_color}</p>
<p>Eye Color: {starwars.eye_color}</p>
</div>:
 (props.cat=="planets")?
 <div> <h3>Name: {starwars.name}</h3>
<p>Climate: {starwars.climate}</p>
<p>Terrain: {starwars.terrain}</p>
<p>Surface Water: {starwars.surface_water}</p>
<p>Population: {starwars.population}</p>
</div>:
(props.cat=="starships")?
<div> <h3>Name: {starwars.name}</h3>
<p>Model: {starwars.model}</p>
<p>Manufacturer: {starwars.manufacturer}</p>
<p>Starship class: {starwars.starship_class}</p>

</div>:

""
        }
     
    </div>
  )
}

export default Display
