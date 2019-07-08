import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';
import DropDown from "./DropDown";

const SliderWithTooltip = createSliderWithTooltip(Slider);

class NavBar extends Component {

  render() {
    const { level, displayedFormat } = this.props;
    const handleSliderChange = this.props.handleSliderChange;
    const handleFormatChange = this.props.handleFormatChange;
    return (
      <header className='NavBar'>
        <div className="NavBar__container">
          <div className="NavBar__logo--container">
            <Link to='/'>
              <div className="NavBar__logo--text"
                   style={ { color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` } }>Palettize
              </div>
            </Link>
          </div>
          { this.props.displaySlider &&
          <div className="NavBar__slider">
            <SliderWithTooltip
              min={ 100 }
              max={ 900 }
              step={ 100 }
              defaultValue={ level }
              onChange={ (value) => handleSliderChange(value) }
            />
          </div>
          }
          { this.props.displayDropdown &&
            <DropDown handleFormatChange={ handleFormatChange }
                      displayedFormat={ displayedFormat }/>
          }
        </div>
      </header>
    );
  }
}

export default NavBar;
