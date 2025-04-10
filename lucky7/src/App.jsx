import React from 'react';
import Die from './Die';

function App() {
  return (
    <div>
      <Die val={2} />
      <Die val={4} />
      <Die val={1} />
      <Die val={5} />
    </div>
  );
}

export default App;