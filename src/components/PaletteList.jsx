import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from "./MiniPalette";
import NavBar from "./NavBar";

class PaletteList extends Component {


  render() {
    const { palettes } = this.props;
    const miniPalettes = palettes.map(palette => (
        <Link to={ `/palette/${palette.id}` }>
          <MiniPalette key={palette.id} { ...palette }/>
        </Link>
      ));

    return (
      <div className='PaletteList'>
        <NavBar >
          <Link className='PaletteList__link--new-palette' to='/palette/new'>
            <div>
              Create New Palette
            </div>
          </Link>
        </NavBar>
        <div className='PaletteList__container'>
          { miniPalettes }
        </div>
      </div>
    );

  }
}

export default PaletteList;