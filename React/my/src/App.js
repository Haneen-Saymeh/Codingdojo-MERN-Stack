
import './App.css';
import TaskForm from './components/TaskForm';
import TaskDisplay from './components/TaskDisplay';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const func=(todo)=>{
    setTodos([...todos,todo])

  }

  const deleteTaks=(i)=>{
    setTodos([...todos.slice(0,i), ...todos.slice(i+1)]);
    return setTodos;
  }

  const taskDone=(id)=>{
    const taskisDone = todos.filter((todo, i)=> i==id);
    taskisDone[0].completed =! taskisDone[0].completed;
    setTodos([...todos]);

  }

  return (
    <div >
     <TaskForm   myfun={func}/>
     <TaskDisplay data={todos}  deletefun={deleteTaks}  taskDone={taskDone}/>
    </div>
  );
}

export default App;
