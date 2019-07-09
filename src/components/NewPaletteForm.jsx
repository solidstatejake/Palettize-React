import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import NavBar from "./NavBar";
import Drawer from "./Drawer";

class NewPaletteForm extends Component {
  render() {
    return (
      <div className='NewPaletteForm'>
        <NavBar/>
        <Drawer>
          <div className="NewPaletteForm__color-picker">
            <ChromePicker/>
          </div>
        </Drawer>

      </div>
    );
  }
}

export default NewPaletteForm;