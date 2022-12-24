import React from 'react';
import {Link} from '@reach/router';

const GameStatus = () => {
  return (
    <div>
       <Link to={"/status/game/1"} >Game 1</Link> ||
      <Link to={"/status/game/2"} >Game 2</Link>  ||
      <Link to={"/status/game/3"} >Game 3</Link>
    </div>
  )
}

export default GameStatus
