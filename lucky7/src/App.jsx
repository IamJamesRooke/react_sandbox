import React from 'react';
import Die from './Die';
import Dice from './Dice';

function App() {
  return (
    <div>
      <Dice dice = {[1, 2, 3, 4, 5, 6]}/>
    </div>
  );
}

export default App;