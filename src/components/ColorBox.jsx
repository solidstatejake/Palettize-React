import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipboard text={background}>
        <div className="ColorBox" style={ { background } }>
          <button className="ColorBox__button--copy">Copy</button>
          <span className='ColorBox__content--color-name'>{ name }</span>
          <span className='ColorBox__button--see-more'>More</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;pac