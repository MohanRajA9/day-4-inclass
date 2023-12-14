import './App.css';
import { AddColor } from './AddColor';

function App() {
  const start = "--start--"
  return (
    <div className="App">
      <h5>let's {start}</h5>
      <AddColor/>
    </div>
  );
}

export default App;
