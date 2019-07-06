import React, { Component } from 'react';

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div className="ColorBox" style={ { background } }>
        <button className="ColorBox__button--copy">Copy</button>
        <span className='ColorBox__content--color-name'>{ name }</span>
        <span className='ColorBox__button--see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;