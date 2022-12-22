
import './App.css';
import PlayerForm from './components/PlayerForm';
import PlayerList from './components/PlayerList';
import {Router} from '@reach/router';

function App() {
  return (
    <div >
      <Router>

<PlayerList path="/players/list" />
<PlayerForm path="/players/addplayer"/>


</Router>
    </div>
  );
}

export default App;
