import { useState } from 'react';
import Stars from './components/Stars';

function App() {
  const items = new Array(5).fill(false);
  const [ rate, setRate ] = useState(0);
  const changeRate = (ix) => setRate(ix + 1);

  return (
    <div>
      <Stars 
        items={ items } 
        rate={ rate } 
        changeRate={ changeRate } 
      />
    </div>
  );
}

export default App;
