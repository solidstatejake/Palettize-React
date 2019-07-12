import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from "./Logo";

class NavBar extends Component {


  render() {
    const { applyLeftMargin, modifyWidth } = this.props;


    return (
      <nav className='NavBar'>
        <div className="NavBar__container">
          <Logo applyLeftMargin={applyLeftMargin} modifyWidth={modifyWidth}/>

          { this.props.children }

        </div>
      </nav>
    );
  }
}

export default NavBar;
