
import './App.css';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import {Router} from '@reach/router';
import TopLinks from './components/TopLinks';
import GameOne from './components/GameOne';
import GameTwo from './components/GameTwo';
import GameThree from './components/GameThree';


function App() {
  return (
    <div >
      <TopLinks/>
      <Router>

<PlayerList path="/players/list" />
<PlayerForm path="/players/addplayer"/>

<GameOne   path="/status/game/1"   />
<GameTwo  path="/status/game/2"  />
<GameThree path="/status/game/3"  />


</Router>
    </div>
  );
}

export default App;
