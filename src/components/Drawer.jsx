import React, { Component } from 'react';

class Drawer extends Component {
 render() {
  return (
   <div className='Drawer'>
     <header className='Drawer__header'>
       <span className="Drawer__header--text">Palette Designer</span>
     </header>

     {this.props.children}
   </div>
  );
 }
}

export default Drawer;