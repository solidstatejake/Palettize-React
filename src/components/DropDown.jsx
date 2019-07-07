import React, { Component } from 'react';
import DropDownItem from "./DropDownItem";

class DropDown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayMenu: false
    };

    this.displayMenu = this.displayMenu.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  displayMenu() {
    this.setState({ displayMenu: !this.state.displayMenu })
  }

  changeFormat(formatValue) {
    this.props.handleFormatChange(formatValue);
  }

  render() {
    const formatTypes = [ 'HEX', 'RGB', 'RGBA' ];
    const dropDownItems = formatTypes.map((type) => {
      return <DropDownItem
        formatType={ type }
        changeFormat={ this.changeFormat }
        displayMenu={ this.displayMenu }
        displayedFormat={ this.props.displayedFormat }
      />
    });
    return (
      <div className="DropDown">
        <div className="DropDown__text" onClick={ this.displayMenu }>Color Format</div>
        { this.state.displayMenu &&
        <div className="DropDown__menu">
          { dropDownItems }
        </div>
        }
      </div>
    );
  }
}

export default DropDown;