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
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[ `${level}` ].map(color => {
      const backgroundFormat = this.determineBackgroundFormat(color);
      return <ColorBox
        background={ backgroundFormat }
        name={ color.name }
      />;
    });

    return (
      <div className="Palette">
        <NavBar
          level={ level }
          handleSliderChange={ this.handleSliderChange }
          handleFormatChange={ this.handleFormatChange }
          displayedFormat={ this.state.displayedFormat }

        />
        <div className="Palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default Palette;