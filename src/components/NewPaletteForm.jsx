import React, { Component } from 'react';

class NewPaletteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleChangeColorName(event) {
    this.props.changeColorName(event)
  }


  render() {
    return (
      <div className="NewPaletteForm__button--container">
        <input className='NewPaletteForm__input--text' type="text"
               placeholder='Color Name' value={ currentColor.name }
               onChange={ this.handleChangeColorName }
        />

        {/*<input className='NewPaletteForm__input--text' type="text"*/}
               {/*placeholder='Palette Name' value={ currentPaletteName }*/}
               {/*onChange={ this.handlePaletteNameChange }*/}
        {/*/>*/}

        {/*<button className="NewPaletteForm__button"*/}
                {/*onClick={ () => this.addColor(currentColor) }*/}
        {/*>Add Color*/}
        {/*</button>*/}

        {/*<button className="NewPaletteForm__button"*/}
                {/*onClick={ () => this.randomizeColor(false) }*/}
        {/*>Randomize Color*/}
        {/*</button>*/}

        {/*<button className="NewPaletteForm__button--create-palette"*/}
                {/*onClick={ this.handleCreateNewPalette }*/}
        {/*>Create Palette*/}
        {/*</button>*/}
      </div>
    );
  }
}

export default NewPaletteForm;