
import './App.css';
import {Router} from '@reach/router';
import React from "react";

import VariableSth from './components/VariableSth';
import HomePage from './components/HomePage';
import MoreVars from './components/MoreVars';

function App() {
  return (
    <div >
      <h1>Wlecome to routing practice</h1>

 <Router>
        <VariableSth  path="/:var"/>
      <HomePage  path="/home"/>
      <MoreVars   path="/:var1/:var2/:var3"  />
      </Router>
     
      
      
      
    </div>
  );
}

export default App;
