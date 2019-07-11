import React, { Component } from 'react';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.handleColorPickerChange = this.handleColorPickerChange.bind(this);
    this.handleChangeColorName = this.handleChangeColorName.bind(this);
    this.handleAddColor = this.handleAddColor.bind(this);
    this.handleRandomizeColor = this.handleRandomizeColor.bind(this);
    this.handleClearPalette = this.handleClearPalette.bind(this);
  }

  handleColorPickerChange() {

  }

  handleChangeColorName(event) {
    this.props.changeColorName(event)
  }

  handleAddColor(){

  }

  handleRandomizeColor() {

  }

  handleClearPalette() {

  }

  // <NewPaletteForm
  //   currentColor={ currentColor }
  //   changeColorPicker={this.changeColorPicker}
  //   changeCurrentColorName={this.handleChangeColorName}
  //   addColor={this.addColor(currentColor)}
  //   randomizeColor={this.randomizeColor(false)}
  //   clearPalette={this.clearPalette}
  //  />

  render() {
    return (
      <div>
        <ChromePicker color={ currentColor.color }
                      onChangeComplete={ this.handleColorPickerChange }/>

        <div className='Drawer__container--form'>

          <div className="Drawer__button--container">
            <input className='Drawer__input' type="text"
                   placeholder='Color Name' value={ currentColor.name }
                   onChange={ this.changeCurrentColorName }/>

            <button className="Drawer__button--add-color"
                    onClick={ () => this.addColor(currentColor) }>
              Add Color
            </button>

            <button className="Drawer__button--randomize-color"
                    onClick={ () => this.randomizeColor(false) }>
              Randomize Color
            </button>

          </div>
        </div>
        <button className="Drawer__button--delete-palette"
                onClick={ this.clearPalette }>
          Clear Palette
        </button>
      </div>
    );
  }
}

export default NewPaletteForm;