import React, { Component } from 'react';

class Drawer extends Component {
  constructor(props) {
      super(props);

      this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
  }
  handleToggleDrawer() {
    this.props.toggleDrawer();
  }
  render() {
    const {displayDrawerContents} = this.props;
    return (
      <div
        className={`Drawer ${displayDrawerContents && 'Drawer__OPEN'}`}
      >
        <header className='Drawer__header' onClick={this.handleToggleDrawer}>

        </header>


        <div className="Drawer__contents--container">
          { this.props.children }
        </div>

      </div>
    );
  }
}

export default Drawer;