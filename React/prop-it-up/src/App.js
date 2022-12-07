
import './App.css';
import PersonCard from './components/PersonCard'

function App() {
  return (
    <div>
      <PersonCard firstname={"Jane"} lastname ="Doe" age={9} hair="Brown"/>
      <PersonCard firstname={"Smith"} lastname ="John" age={88} hair="Black"/>
      <PersonCard firstname={"Fillmore"} lastname ="Millard" age={50} hair="Brown"/>
      <PersonCard firstname={"Smith"} lastname ="Maria" age={62} hair="Red"/>
    </div>
  );
}

export default App;
