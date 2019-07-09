import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import seedColors from "../utils/seedColors";
import { generatePalette } from "../utils/colorHelpers";
import '../stylesheets/css/main.css';
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import NewPaletteForm from "./NewPaletteForm";


class App extends Component {
  findPalette(id) {
    return seedColors.find((palette) => {
      return palette.id === id;
    })
  }


  render() {

    return (
      <Router>
        <Switch>
          <Route
            exact
            path='/'
            render={ () => <PaletteList palettes={ seedColors }/> }
          />

          <Route
            exact
            path='/palette/new'
            render={ () => <NewPaletteForm/> }
          />

          <Route
            exact
            path='/palette/:id'
            render={ (routeProps) => (
              <Palette
                routeProps={ routeProps }
                palette={ generatePalette(this.findPalette(routeProps.match.params.id)) }
              />
            ) }
          />

          <Route
            exact
            path='/palette/:paletteId/:colorId'
            render={ (routeProps) => (
              <SingleColorPalette
                routeProps={ routeProps }
                palette={ generatePalette(this.findPalette(routeProps.match.params.paletteId)) }
              />
            )
            }
          />

        </Switch>
      </Router>

    );
  }
}

export default App;
