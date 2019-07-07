import React, { Component } from 'react';
import Palette from "./Palette";
import seedColors from "../utils/seedColors";
import {generatePalette} from "../utils/colorHelpers";
import '../stylesheets/css/main.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Palette palette={generatePalette(seedColors[ 1 ])} />
      </div>
    );
  }
}

export default App;
