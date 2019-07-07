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

  render() {
    let backgroundFormat;
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[ `${level}` ].map(color => {
      switch (this.state.displayedFormat) {
        case "HEX":
          backgroundFormat = color.hex;
          break;
        case "RGB":
          backgroundFormat = color.rgb;
          break;
        case "RGBA":
          backgroundFormat = color.rgba;
          break;
      }
      return <ColorBox background={ backgroundFormat } name={ color.name }/>;
    });

    return (
      <div className="Palette">
        <NavBar
          level={ level }
          handleSliderChange={ this.handleSliderChange }
          handleFormatChange={ this.handleFormatChange }
        />
        <div className="Palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default Palette;