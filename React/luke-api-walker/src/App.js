
import './App.css';
import FormShow from './components/FormShow';
import {Router} from '@reach/router';


import Display from './components/Display';

function App() {
  return (
    <div >
    <FormShow/>
    <Router>
      <Display  path="/:cat/:id"/>
    </Router>
    </div>
  );
}

export default App;
