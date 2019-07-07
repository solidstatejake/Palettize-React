import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import NavBar from "./NavBar";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 400 };

    this.handleSliderChange = this.handleSliderChange.bind(this);
  }


  handleSliderChange(value) {
    this.setState({ level: value })
  }

  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[ `${level}` ].map(color => {
      return <ColorBox background={ color.hex } name={ color.name }/>;
    });

    return (
      <div className="Palette">
        <NavBar level={level} handleSliderChange={this.handleSliderChange}/>
        <div className="Palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default Palette;