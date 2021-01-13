import React from 'react';

import Pokedex from './Components/Pokedex'

import Data from './Data.json'

function App() {
  return (
    <div className="App">
      <Pokedex list={Data} />
    </div>
  );
}

export default App;
