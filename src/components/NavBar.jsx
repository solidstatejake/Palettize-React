import React, { Component } from 'react';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class NavBar extends Component {

  render() {
    const level = this.props.level;
    const handleSliderChange = this.props.handleSliderChange;

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
              defaultValue={ this.props.level }
              onChange={ (value) => handleSliderChange(value) }
            />
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
