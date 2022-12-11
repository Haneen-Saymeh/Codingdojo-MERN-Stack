
import { useState } from 'react';
import './App.css';
import ColorForm from './components/ColorForm';
import ColorShow from './components/ColorShow';

function App() {
  const [sth, setSth] = useState([]);
  const fun1 = (hanin) =>{
    // setSth(sth.concat(hanin));
    setSth([...sth,hanin])

  }
  return (
    <div>
      <ColorForm  liftfunc={fun1}  />
      <ColorShow  data={sth} />
    </div>
  );
}

export default App;
