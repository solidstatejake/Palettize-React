import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {


  render() {
    const { applyLeftMargin, modifyWidth } = this.props;
    const randomColor =`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    let headerStyle;

    if(applyLeftMargin)
      headerStyle = {marginLeft: '3rem'};
    else if(modifyWidth)
      headerStyle = { width: '20rem', textAlign: 'center' };

    return (
      <nav className='NavBar'>
        <div className="NavBar__container">
          <div className="NavBar__logo--container"
               style={ headerStyle }
          >
            <Link to='/'>
              <div className="NavBar__logo--text"
                   style={ { color: randomColor, textShadow: `0 0 1rem ${randomColor}` } }
              >
                Palettize
              </div>
            </Link>
          </div>

          { this.props.children }

        </div>
      </nav>
    );
  }
}

export default NavBar;
/*
margin-left 3rem on homepage
nothing on create new palette page
nothing on /palette page
width: 20rem on shades page
 */