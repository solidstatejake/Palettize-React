import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {

  render() {
    return (
      <header className='NavBar'>
        <div className="NavBar__container">
          <div className="NavBar__logo--container">
            <Link to='/'>
              <div className="NavBar__logo--text"
                   style={ { color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` } }
              >
                Palettize
              </div>
            </Link>
          </div>

          { this.props.children }

        </div>
      </header>
    );
  }
}

export default NavBar;
