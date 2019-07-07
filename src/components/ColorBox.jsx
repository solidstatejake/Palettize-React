import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class ColorBox extends Component {

  constructor(props) {
    super(props);
    this.state = { copied: false };

    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1000);
    })
  }

  render() {
    const { name, background } = this.props;
    const copied = this.state.copied;
    return (
      <CopyToClipboard text={ background } onCopy={ this.changeCopyState }>
        <div className="ColorBox" style={ { background } }>
          <div className={ `ColorBox__overlay ${copied && 'ColorBox__active'}` }
               style={ { background } }>

            <div
              className={ `ColorBox__active--message ${copied && 'ColorBox__active--message-active'}` }>
              <h1>Copied!</h1>
              <p>{ background }</p>
            </div>

          </div>
          <button className="ColorBox__button--copy">Copy</button>
          <span className='ColorBox__content--color-name'
                style={ name.length > 18 ? { fontSize: '.8rem' } : {} }>
            { name }
            </span>
          <span className='ColorBox__button--see-more'>Shades</span>
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;