import React, { Component } from 'react';
import { ChromePicker } from 'react-color';
import chroma from 'chroma-js';
import NavBar from "./NavBar";
import Drawer from "./Drawer";
import DraggableGrid from "./DraggableGrid";
import { arrayMove } from 'react-sortable-hoc'

class NewPalettePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayDrawerContents: false,
      currentPaletteName: '',
      currentPaletteEmoji: '',
      currentColor: this.randomizeColor(true),
      colorsInUserPalette: []
    };

    this.toggleDrawer = this.toggleDrawer.bind(this);
    this.clearPalette = this.clearPalette.bind(this);
    this.changeColorPicker = this.changeColorPicker.bind(this);
    this.changeCurrentColorName = this.changeCurrentColorName.bind(this);
    this.changeCurrentPaletteName = this.changeCurrentPaletteName.bind(this);
    this.randomizeColor = this.randomizeColor.bind(this);
    this.handleCreateNewPalette = this.handleCreateNewPalette.bind(this);
    this.deleteUserColorBox = this.deleteUserColorBox.bind(this);
  }

  toggleDrawer() {
    this.setState({ displayDrawerContents: !this.state.displayDrawerContents })
  }

  clearPalette() {
    this.setState({ colorsInUserPalette: [] }, () => console.log('force update'));
  }

  changeColorPicker(color) {
    const name = this.state.currentColor.name;
    this.setState({
      currentColor: {
        color: color.hex,
        name
      }
    });
  }

  changeCurrentColorName(event) {
    this.setState({
      currentColor: {
        ...this.state.currentColor,
        name: event.target.value
      }
    })
  }

  changeCurrentPaletteName(event) {
    this.setState({ currentPaletteName: event.target.value })
  }

  addColor(newColor) {
    const { colorsInUserPalette, currentColor } = this.state;

    if (currentColor.name.length < 3) {
      return alert('Color must have a name of at least three characters.');
    }

    for (let color of colorsInUserPalette) {
      if (color.name === newColor.name) return alert('Color name must be unique.');
    }

    this.setState({
      colorsInUserPalette: [ ...colorsInUserPalette, newColor ],
      currentColor: {
        ...currentColor,
        name: ''
      }
    })
  }

  randomizeColor(calledInConstructor = false) {
    const randomColor = chroma.random();
    const currentColor = {
      color: randomColor.hex(),
      name: calledInConstructor ? '' : this.state.currentColor.name
    };

    if (calledInConstructor) {
      return currentColor;
    } else {
      this.setState({ currentColor })
    }
  }

  handleCreateNewPalette() {

    const { currentPaletteName, colorsInUserPalette } = this.state;

    if (currentPaletteName.length < 3) {
      return alert('Palette name must be longer than three characters.');
    }

    const currentPaletteIdName = currentPaletteName.toLowerCase().replace(new RegExp(' ', 'g'), '-');

    const newPalette = {
      paletteName: currentPaletteName,
      id: currentPaletteIdName,
      emoji: '',
      colors: colorsInUserPalette
    };

    this.props.createNewPalette(newPalette);
    this.props.routeProps.history.push('/');
  }

  deleteUserColorBox(name) {
    this.setState({
      colorsInUserPalette: this.state.colorsInUserPalette.filter((color) => color.name !== name)
    })
  }

  // This function is needed by the drag n drop library to reorder boxes.
  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colorsInUserPalette }) => ({
      colorsInUserPalette: arrayMove(colorsInUserPalette, oldIndex, newIndex)
    }))
  };

  render() {

    const {
      currentColor, colorsInUserPalette,
      currentPaletteName, displayDrawerContents
    } = this.state;

    return (
      <div className='NewPaletteForm'>
        <NavBar>
          <button className="NewPaletteForm__button--open-palette-designer"
                  onClick={ this.toggleDrawer }>
            Palette Designer
          </button>

          <input className='NewPaletteForm__input--palette-name' type="text"
                 placeholder='Palette Name' value={ currentPaletteName }
                 onChange={ this.changeCurrentPaletteName }/>

          <button className="NewPaletteForm__button--create-palette"
                  onClick={ this.handleCreateNewPalette }>
            Create Palette
          </button>

        </NavBar>

        <div className="NewPaletteForm__body--container">

          <Drawer displayDrawerContents={ displayDrawerContents }>
            <ChromePicker color={ currentColor.color }
                          onChangeComplete={ this.changeColorPicker }/>

            <div className='Drawer__container--form'>

              <div className="Drawer__button--container">
                <input className='Drawer__input' type="text"
                       placeholder='Color Name' value={ currentColor.name }
                       onChange={ this.changeCurrentColorName }/>

                <button className="Drawer__button--add-color"
                        style={ { background: currentColor.color } }
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

          </Drawer>


          <DraggableGrid
            displayDrawerContents={ displayDrawerContents }
            colorsInUserPalette={ colorsInUserPalette }
            deleteUserColorBox={ this.deleteUserColorBox }
            axis='xy'
            onSortEnd={ this.onSortEnd }
          />


        </div>

      </div>
    );
  }
}

export default NewPalettePage;
