import React from 'react'
// import { Link }             from 'react-router-dom';
import Logo  from './Logo'


const NavBar = ({ children, applyLeftMargin, modifyWidth }) => <nav className='NavBar'>
  <div className="NavBar__container">
    <Logo applyLeftMargin={ applyLeftMargin } modifyWidth={ modifyWidth }/>
    { children }
  </div>
</nav>


export default NavBar
