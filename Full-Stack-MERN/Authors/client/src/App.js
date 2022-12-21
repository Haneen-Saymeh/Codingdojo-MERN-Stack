
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';

import Update from './views/Update';
import New from './views/New';

function App() {
  return (
    <div >
      <Router>

        <Main path="/" />
        <New path="/new"/>
        <Update path ="/edit/:id" />
   
      </Router>
    </div>
  );
}

export default App;
