import React, { Component } from 'react';

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div className="ColorBox" style={ { background } }>
        <div className="ColorBox__copy--container">
          <div className="ColorBox__content">

            <span className='ColorBox__content--color-name'>{ name }</span>
          </div>
          <button className="ColorBox__button--copy">Copy</button>
        </div>
        <span className='ColorBox__button--see-more'>More</span>
      </div>
    );
  }
}

export default ColorBox;