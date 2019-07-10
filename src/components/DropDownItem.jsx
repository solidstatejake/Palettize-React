import React, { Component } from 'react';

class DropDownItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    const {displayedFormat, formatType} = this.props;
    console.log(displayedFormat, formatType);
    return (
      <div
        className="DropDownItem"
        style={displayedFormat === formatType ? {backgroundColor: "orange"} : {}}
        onClick={ () => {
          this.props.changeFormat(formatType);
          this.props.displayMenu()
        } }
      >

        { formatType }

      </div>
    );
  }
}

export default DropDownItem;