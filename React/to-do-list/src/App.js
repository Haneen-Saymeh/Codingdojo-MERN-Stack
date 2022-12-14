
import { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import AminForm from './components/AminForm';
import ShowTask from './components/ShowTask';
import AminDisplay from './components/AminDisplay';

function App() {


  const [todos, settodos]=useState([]);


  const myfun=(todo)=>{
    settodos([...todos,todo])
  }

  const deleteTasks=(id)=>{
    settodos(todos.filter((todo,i)=> id !=i))

  }


  const updateTasks=(id)=>{
    const tasktoupdate=todos.filter((todo,i)=> i==id);
    tasktoupdate[0].completed=! tasktoupdate[0].completed;
    settodos([...todos]);
  }

  // anything required to be changed and required updated it should be done on the parent component to be reflected and sent back
  // to diplay component, diplay component only recive objcts, lists but no functions should be added
//   const [work, setWork] = useState([]);
// const func= (z)=>{
//   setWork(work.concat(z));
// }

// const removethem=(i) =>{
//   setWork([...work.slice(0,i), ...work.slice(i+1)]);
//   return setWork;

// }
  
  return (
    <div>
     {/* <AddTask  myfun={func}  />
     <ShowTask  data={work} removetasks={removethem} /> */}
     <AminForm  myfun={myfun}/>
     <AminDisplay  todos={todos}  deleteTasks={deleteTasks} updateTasks={updateTasks}/>
    </div>
  );
}

export default App;
