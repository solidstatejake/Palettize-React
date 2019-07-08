import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 400, displayedFormat: 'HEX' };

    this.handleSliderChange = this.handleSliderChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
  }


  handleSliderChange(value) {
    this.setState({ level: value })
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
    let { colors, id: paletteId } = this.props.palette;
    const level = this.state.level;
    const colorBoxes = colors[ `${level}` ].map(color => {
      const backgroundFormat = this.determineBackgroundFormat(color);
      return <ColorBox
        key={ color.id }
        id={ color.id }
        paletteId={ paletteId }
        background={ backgroundFormat }
        name={ color.name }
        displayShadesButton={ true }
      />;
    });

    return (
      <div className="Palette">
        <NavBar
          level={ level }
          routeProps={ this.props.routeProps }
          displayBackButton={ true }
          displaySlider={ true }
          displayDropdown={ true }
          displayedFormat={ this.state.displayedFormat }
          handleSliderChange={ this.handleSliderChange }
          handleFormatChange={ this.handleFormatChange }
        />
        <header
          className='Palette__header'>{ this.props.palette.paletteName } { this.props.palette.emoji }</header>
        <div className="Palette__colors">
          { colorBoxes }
        </div>

      </div>
    );
  }
}

export default Palette;