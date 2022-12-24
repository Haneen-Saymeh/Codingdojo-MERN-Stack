import React from 'react';
import {Link} from '@reach/router';

const TopLinks = () => {
  return (
    <div style={{marginLeft:"37%", marginTop:"3%"}}>
      <Link to={"/status/game/1" } >Manage players status</Link>  ||  

         <Link to={"/players/list" } >Manage players</Link>
    </div>
  )
}

export default TopLinks
