import React, { Component }                from 'react';
import ColorBox                            from "./ColorBox";
import NavBar                              from "./NavBar";
import BackButton                          from "./BackButton";
import DropDown                            from "./DropDown";
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

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
        <NavBar>
          <BackButton routeProps={ this.props.routeProps }/>
          <div className="NavBar__slider">
            <SliderWithTooltip
              min={ 100 }
              max={ 900 }
              step={ 100 }
              defaultValue={ level }
              onChange={ (value) => this.handleSliderChange(value) }
            />
          </div>

          <DropDown handleFormatChange={ this.handleFormatChange }
                    displayedFormat={ this.state.displayedFormat }
          />
        </NavBar>
        <header className='Palette__header'>{ this.props.palette.paletteName } { this.props.palette.emoji }</header>
        <div className="Palette__colors">
          { colorBoxes }
        </div>

      </div>
    );
  }
}

export default Palette;