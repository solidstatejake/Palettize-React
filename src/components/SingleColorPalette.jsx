import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";
import BackButton from "./BackButton";
import DropDown from "./DropDown";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this.state = { displayedFormat: 'HEX' };

    this.grabShades = this.grabShades.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);

  }

  grabShades() {
    const { colors } = this.props.palette;
    return Object.keys(colors).map(key => {
      return colors[ key ].find(color => {
        return color.id === this.props.routeProps.match.params.colorId;
      })
    })
  }

  handleFormatChange(formatValue) {
    this.setState({ displayedFormat: formatValue })
  }

  determineBackgroundFormat(colorObject) {
    switch (this.state.displayedFormat) {
      case "HEX":
        return colorObject.hex;
      case "RGB":
        return colorObject.rgb;
      case "RGBA":
        return colorObject.rgba;
      default:
        return colorObject.hex;
    }
  }

  render() {
    const { paletteName, emoji } = this.props.palette;
    const singleColorPalette = this.grabShades();
    const colorName = singleColorPalette[ 0 ].name.replace('50', '');
    const singleColorBoxes = singleColorPalette.map((colorObject) => {
      const backgroundFormat = this.determineBackgroundFormat(colorObject);
      return <ColorBox
        key={ colorObject.hex }
        id={ colorObject.id }
        background={ backgroundFormat }
        name={ colorObject.name }
      />;
    });

    return (
      <div className='SingleColorPalette'>
        <NavBar>
          <BackButton routeProps={ this.props.routeProps }/>

          <DropDown handleFormatChange={ this.handleFormatChange }
                    displayedFormat={ this.state.displayedFormat }/>
        </NavBar>

        <header className='SingleColorPalette__header'>
          { paletteName } { emoji }
          <br/>
          { colorName }
        </header>

        <div className="SingleColorPalette__body">

          <div className='SingleColorPalette__colors'>

            { singleColorBoxes }
          </div>
        </div>
      </div>
    );
  }
}

export default SingleColorPalette;