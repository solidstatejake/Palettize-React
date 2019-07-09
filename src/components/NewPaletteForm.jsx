import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import chroma from 'chroma-js';
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import UserColorBox from "./UserColorBox";

class NewPaletteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDrawerContents: false,
      currentColor: this.randomizeColor(true),
      colors: []
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
    this.handleColorNameChange = this.handleColorNameChange.bind(this);
    this.randomizeColor = this.randomizeColor.bind(this);
  }

  clearPalette() {
    this.setState({colors: []}, () => console.log('force update'));
  }

  handleColorPickerChange(color) {
    const name = this.state.currentColor.name;
    this.setState({
      currentColor: {
        hex: color.hex,
        rgb: {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b,
        },
        rgba: color.rgb,
        name
      }
    });
  }

  handleColorNameChange(event) {
    this.setState({
      currentColor: {
        ...this.state.currentColor,
        name: event.target.value
      }
    }
    )
  }

  toggleDrawer() {
    this.setState({ displayDrawerContents: !this.state.displayDrawerContents })
  }

  randomizeColor(calledInConstructor) {
    const randomColorHEX = chroma.random();
    const randomColorRGBA = randomColorHEX.rgba();
    const currentColor = {
      hex: randomColorHEX.hex(),
      rgb: {
        r: randomColorRGBA[ 0 ],
        g: randomColorRGBA[ 1 ],
        b: randomColorRGBA[ 2 ]
      },
      rgba: {
        r: randomColorRGBA[ 0 ],
        g: randomColorRGBA[ 1 ],
        b: randomColorRGBA[ 2 ],
        a: randomColorRGBA[ 3 ]
      },
      name: calledInConstructor ? '' : this.state.currentColor.name
    };

    if(calledInConstructor) {
     return currentColor;
    } else {
      this.setState({ currentColor })
    }
  }

  addColor(newColor) {
    const {colors: currentColors} = this.state;

    // Validate color name length
    if(this.state.currentColor.name.length < 3 ) {
      return alert('Color must have a name of at least three characters.');
    }

    // Validate color name uniquity
    for(let color of currentColors) {
      if(color.name === newColor.name) return alert('Color name must be unique.');
    }

    this.setState({
      colors: [ ...currentColors, newColor ],
      currentColor: {
        ...this.state.currentColor,
        name: ''
      }
    })
  }

  render() {
    return (
      <div className='NewPaletteForm'>
        <NavBar/>
        <div className="NewPaletteForm__body--container">

          <Drawer
            toggleDrawer={ this.toggleDrawer }
            displayDrawerContents={ this.state.displayDrawerContents }
          >
            <button
              className="NewPaletteForm__button--delete-palette"
              onClick={this.clearPalette}
            >
              Clear Palette
            </button>

            <ChromePicker
              color={ this.state.currentColor.hex }
              onChangeComplete={ this.handleColorPickerChange }
            />

            <div className="NewPaletteForm__button--container">
              <input className='NewPaletteForm__input--text' type="text" placeholder='Color Name' value={this.state.currentColor.name} onChange={this.handleColorNameChange}/>
                <button className="NewPaletteForm__button"
                        onClick={ () => this.addColor(this.state.currentColor) }
                >Add Color
                </button>
              <button className="NewPaletteForm__button"
                      onClick={ this.randomizeColor }>Randomize Color
              </button>
            </div>

          </Drawer>

          <div className="NewPaletteForm__colors">
            { this.state.colors.map((color) => {
              return <UserColorBox
                key={ color.name }
                id={ color.name }
                background={ color.hex }
                name={ color.name }
              />;
            }) }
          </div>
        </div>

      </div>
    );
  }
}

export default NewPaletteForm;