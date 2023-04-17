
import './App.css';
import Counter from './components/Counter';
import DataBinding from './components/DataBinding';
import Message from './components/Message';
import RenderingArrayOfObjects from './components/RenderingArrayOfObjects';

function App() {
  return (
    <div className="App">
     <Counter />
     <Message />
     <DataBinding/>
     <RenderingArrayOfObjects/>
    </div>
  );
}

export default App;
