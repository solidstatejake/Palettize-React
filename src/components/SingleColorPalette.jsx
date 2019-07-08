import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.grabShades = this.grabShades.bind(this);

  }

  grabShades() {
    const {colors} = this.props.palette;
    return  Object.keys(colors).map(key => {
      return colors[key].find(color => {
        return color.id === this.props.routeProps.match.params.colorId;
      })
    })
  }

  render() {
    const singleColorPalette = this.grabShades();
    const singleColorBoxes = singleColorPalette.map((colorObject) => {
        return <ColorBox
          key={colorObject.hex}
          id={ colorObject.id }
          background={ colorObject.hex }
          name={ colorObject.name }
        />;
      });

    return (
      <div className='SingleColorPalette'>
        <NavBar displayDropdown={true}/>
        <div className='SingleColorPalette__colors'>

        {singleColorBoxes}
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;