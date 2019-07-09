import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import chroma from 'chroma-js';
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import ColorBox from "./ColorBox";
import UserColorBox from "./UserColorBox";

class NewPaletteForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDrawerContents: false,
      currentColor: {
        hex: '#333333',
        rgb: {
          r: 3,
          g: 3,
          b: 3,

        },
        rgba: {
          r: 3,
          g: 3,
          b: 3,
          a: 1
        }
      },
      colors: []
    };
    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
    this.randomizeColor = this.randomizeColor.bind(this);
  }

  handleColorPickerChange(color) {
    console.log(color);
    this.setState({
      currentColor: {
        hex: color.hex,
        rgb: {
          r: color.rgb.r,
          g: color.rgb.g,
          b: color.rgb.b,
        },
        rgba: color.rgb
      }
    });
  }

  toggleDrawer() {
    this.setState({ displayDrawerContents: !this.state.displayDrawerContents })
  }

  randomizeColor() {
    const randomColorHEX = chroma.random();
    const randomColorRGBA = randomColorHEX.rgba();

    this.setState({
      currentColor: {
        hex: randomColorHEX.hex(),
        rgba: {
          r: randomColorRGBA[ 0 ],
          g: randomColorRGBA[ 1 ],
          b: randomColorRGBA[ 2 ],
          a: randomColorRGBA[ 3 ]
        }
      }
    })
  }

  addColor(newColor) {
    this.setState({ colors: [ ...this.state.colors, newColor ] })
  }

  render() {
    console.log(this.state.currentColor);
    return (
      <div className='NewPaletteForm'>
        <NavBar/>
        <div className="NewPaletteForm__body--container">

          <Drawer
            toggleDrawer={ this.toggleDrawer }
            displayDrawerContents={ this.state.displayDrawerContents }
          >

            <ChromePicker
              color={ this.state.currentColor.hex }
              onChangeComplete={ this.handleColorPickerChange }
            />

            <div className="NewPaletteForm__button--container">
              <button className="NewPaletteForm__button"
                      onClick={ () => this.addColor(this.state.currentColor) }>Add Color
              </button>
              <button className="NewPaletteForm__button"
                      onClick={ this.randomizeColor }>Randomize Color
              </button>
            </div>

          </Drawer>

          <div className="NewPaletteForm__colors">
            { this.state.colors.map((color) => {
              return <UserColorBox
                key={ color.hex }
                id={ color.hex }
                background={ color.hex }
                name={ color.name }
                displayShadesButton={ true }
              />;
            }) }
          </div>
        </div>

      </div>
    );
  }
}

export default NewPaletteForm;