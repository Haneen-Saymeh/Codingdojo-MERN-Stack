
import './App.css';
import BCard from './components/BCard';

function App() {
  return (
    <div>
    <BCard  firstname={"Hanz"}   lastname={"Sol"} age={200} hair={"Brown"}/>
    <BCard  firstname={"Jack"}   lastname={"Sparrow"} age={300} hair={"Black"}/>
    <BCard  firstname={"Tony"}   lastname={"Stark"} age={400} hair={"Red"}/>
    <BCard  firstname={"Bruce"}   lastname={"Wayne"} age={500} hair={"Blonde"}/>
    </div>
  );
}

export default App;
