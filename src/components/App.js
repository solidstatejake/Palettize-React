import React from 'react';
import Palette from "./Palette";
import seedColors from "../utils/seedColors";

function App() {
  return (
    <div className="App">
      <Palette palette={seedColors[4]}/>
    </div>
  );
}

export default App;
