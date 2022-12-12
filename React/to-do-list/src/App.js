
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import ShowTask from './components/ShowTask';

function App() {
  const [work, setWork] = useState([]);
const func= (z)=>{
  setWork(work.concat(z));
}

const removethem=(i) =>{
  setWork([...work.slice(0,i), ...work.slice(i+1)]);
  return setWork;

}
  
  return (
    <div>
     <AddTask  myfun={func}  />
     <ShowTask  data={work} removetasks={removethem} />
    </div>
  );
}

export default App;
