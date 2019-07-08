import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {

  root: {
    alignItems: 'center',
    backgroundColor: 'white',
    border: '1px solid black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '30rem',
    height:' 31rem',
  },

  boxes_container: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    height: '20rem',
    justifyContent: 'start',
    marginBottom: '2rem',
    width: '25rem'
  },
  palette_title: {
    fontSize: '1.3rem'
  },
  color_box: {
    width: '5rem',
    height: '5rem'
  }

};


function MiniPalette(props) {
  const { classes, colors, emoji, id, paletteName } = props;
  return (
    <div className={ classes.root }>
      <div className={classes.boxes_container}>
        {colors.map(color => <div className={classes.color_box} style={{background: color.color}}></div>)}
      </div>
      <div className={classes.palette_title}>
        {paletteName} {emoji}
      </div>
    </div>
  )

}

export default withStyles(styles)(MiniPalette);