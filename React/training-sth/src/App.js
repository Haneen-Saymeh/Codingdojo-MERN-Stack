
import { useState } from 'react';
import './App.css';
import Display from './components/Display';
import Form1 from './components/Form1';

import LangForm from './components/LangForm';

function App() {
  const [txt, setTxt] = useState("");  
  // we can do useState([]) and use concat or use spread setTxt(txt.contact)
  return (
    <div >
      <LangForm/>
      <Form1  myfun={setTxt}/>
      <Display data={txt} />
    </div>
  );
}

export default App;
