import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import DropDown from "./DropDown";

const SliderWithTooltip = createSliderWithTooltip(Slider);

class NavBar extends Component {

  render() {
    const {level, displayedFormat }= this.props;
    const handleSliderChange = this.props.handleSliderChange;
    const handleFormatChange = this.props.handleFormatChange;
    return (
      <header className='NavBar'>
        <div className="NavBar__container">
          <div className="NavBar__logo--container">
            <a className="NavBar__logo--text" href="#">Palettize</a>
          </div>
          <div className="NavBar__slider">
            <SliderWithTooltip
              min={ 100 }
              max={ 900 }
              step={ 100 }
              defaultValue={ level }
              onChange={ (value) => handleSliderChange(value) }
            />
          </div>
          <DropDown handleFormatChange={handleFormatChange} displayedFormat={displayedFormat} />
        </div>
      </header>
    );
  }
}

export default NavBar;
