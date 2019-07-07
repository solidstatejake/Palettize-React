import React, { Component } from 'react';
import ColorBox from "./ColorBox";
import Slider, {createSliderWithTooltip} from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class Palette extends Component {
  constructor(props) {
      super(props);
      this.state = { level: 400};

      this.handleSliderChange = this.handleSliderChange.bind(this);
  }


  handleSliderChange(value) {
    this.setState({level: value })
  }

  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBoxes = colors[ `${level}` ].map(color => {
      return <ColorBox background={ color.hex } name={ color.name }/>;
    });

    return (
      <div className="Palette">
        <SliderWithTooltip
          min={100}
          max={900}
          step={100}
          defaultValue={level}
          onChange={(value) => this.handleSliderChange(value)}
          railStyle={{width: '100rem', margin: '0 auto'}}
        />
        <div className="Palette__colors">
          { colorBoxes }
        </div>
      </div>
    );
  }
}

export default Palette;