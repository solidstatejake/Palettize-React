import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'grid',
    fontSize: '1rem',
    gridTemplateRows: '17rem 3rem',
    gridTemplateColumns: '9rem 11rem',
    gridTemplateAreas: '"copy ." "title more"',
    height: '20rem',
    letterSpacing: '.2rem',
    textTransform: 'uppercase',
    width: '20rem',

    '& span': {
      gridArea: 'title',
      marginLeft: '1rem'
    }
  }
};


function UserColorBox(props) {

  const { name, background, classes } = props;
  return (
    <div className={ classes.root } style={ { background } }>

      <span>{ name }</span>
    </div>
  )
}

export default withStyles(styles)(UserColorBox);