import { useState } from 'react';
import { Calculation } from './components/tabs/calculation';

function App() {
  const [title, setTitle] = useState('Turning');

  return (
    <div className="App">
      <h1>
        Cutting Calculation ({title})
        <Calculation setTitle={setTitle} title={title}/>
      </h1>
    </div>
  );
}

export default App;
