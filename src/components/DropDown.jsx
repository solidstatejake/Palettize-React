import React, { Component } from 'react';

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.displayMenu = this.displayMenu.bind(this);
  }

  displayMenu() {
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  changeFormat(formatValue) {
    this.props.handleFormatChange(formatValue);
  }

  render() {
    return (
      <div className="DropDown" >
        <div className="DropDown__text" onClick={ this.displayMenu }>Color Format</div>
        { this.state.displayMenu &&
        <div className="DropDown__menu">
          <div className="DropDown__menu--item" onClick={() => this.changeFormat("HEX")}>Hex</div>
          <div className="DropDown__menu--item" onClick={() =>this.changeFormat("RGB")}>rgb</div>
          <div className="DropDown__menu--item" onClick={() => this.changeFormat("RGBA")}>rgba</div>
          <div className="DropDown__menu--item">Name</div>
        </div>
        }
      </div>
    );
  }
}

export default DropDown;