
import './App.css';
import BirthdayCard from './components/BirthdayCard';

function App() {
  return (
    <div >
      <BirthdayCard  firstname={"jane"}  lastname={"Doe"} age={40} hair={"brown"}/>
      <BirthdayCard  firstname={"Smith"}  lastname={"John"} age={88} hair={"black"}/>
    </div>
  );
}

export default App;
