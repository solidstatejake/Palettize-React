import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MiniPalette from "./MiniPalette";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (

      <div className='PaletteList'>
        { palettes.map(palette => (
          <Link to={ `/palette/${palette.id}` }>
            <MiniPalette { ...palette }/>
          </Link>

        )) }
      </div>
    );
  }
}

export default PaletteList;