
import './App.css';
import {Router} from '@reach/router';
import Main from './views/Main';


function App() {
  return (
    <div>
     <Router>
    <Main path="/products" />
      </Router>
             
         
    </div>
  );
}

export default App;
