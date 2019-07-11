import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import seedColors from "../utils/seedColors";
import { generatePalette } from "../utils/colorHelpers";
import '../stylesheets/css/main.css';
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPalettePage from "./NewPalettePage";

class App extends Component {
  constructor(props) {
    super(props);
    const localStoragePalettes = JSON.parse(window.localStorage.getItem("palettes"));
    const palettesToDisplay = localStoragePalettes || seedColors;

    this.state = {
      palettes: [ ...palettesToDisplay ],
      palettesToKeep: seedColors.map(palette => palette.id)
    };
    this.createNewPalette = this.createNewPalette.bind(this);
    this.deleteMiniPalette = this.deleteMiniPalette.bind(this);
  }

  findPalette(id) {
    return this.state.palettes.find((palette) => {
      return palette.id === id;
    })
  }

  createNewPalette(newPalette) {
    const { palettes } = this.state;
    this.setState({
        palettes: [ ...palettes, newPalette ]
      },
      this.syncLocalStorage
    );
  }

  deleteMiniPalette(id) {
    const filteredPalettes = this.state.palettes.filter((palette) => {
      return palette.id !== id
    });

    this.setState({ palettes: filteredPalettes})
  }

  syncLocalStorage() {
    window.localStorage.setItem("palettes", JSON.stringify(this.state.palettes));
  }

  render() {
    const { palettes, palettesToKeep } = this.state;

    return (
      <Router>
        <Switch>
          <Route
            exact path='/'
            render={ (routeProps) => <PaletteList palettes={ palettes }
                                                  routeProps={routeProps}
                                                  palettesToKeep={palettesToKeep}
                                                  deleteMiniPalette={ this.deleteMiniPalette }/> }
          />

          <Route
            exact path='/palette/new'
            render={ (routeProps) => <NewPalettePage routeProps={ routeProps }
                                                     createNewPalette={ this.createNewPalette }/> }
          />

          <Route
            exact path='/palette/:id'
            render={ (routeProps) => (
              <Palette
                routeProps={ routeProps }
                palette={ generatePalette(this.findPalette(routeProps.match.params.id)) }
              />
            ) }
          />

          <Route
            exact path='/palette/:paletteId/:colorId'
            render={ (routeProps) => (
              <SingleColorPalette
                routeProps={ routeProps }
                palette={ generatePalette(this.findPalette(routeProps.match.params.paletteId)) }
              />
            ) }
          />

        </Switch>
      </Router>

    );
  }
}

export default App;
