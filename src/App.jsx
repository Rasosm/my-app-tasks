import './App.css';
import Betkoks from './Components/Betkoks';
import Labas from './Components/Labas';
import Zebrai from './Components/Zebrai';
import rand from './Functions/rand';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Betkoks bet="yellow"></Betkoks>
        <Zebrai style={{
         randColor: rand(0, 1) ? 'crimson' : 'skyblue',
        
      }}></Zebrai>
        <Labas></Labas>
      </header>
    </div>
  );
}

export default App;
