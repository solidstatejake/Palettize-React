import React from 'react';
import { withStyles } from '@material-ui/styles';

const styles = {
  root: {
    display: 'grid',
    fontSize: '1rem',
    gridTemplateRows: '17rem 3rem',
    gridTemplateColumns: '17rem 3rem',
    gridTemplateAreas: '". ." "title trash"',
    height: '20rem',
    letterSpacing: '.2rem',
    textTransform: 'uppercase',
    width: '20rem',

    '& span': {
      gridArea: 'title',
      marginLeft: '1rem'
    },

    '& div': {
      gridArea: 'trash',
      textAlign: 'center',
      lineHeight: '3rem',

      '& i': {
        fontSize: '1.3rem',
        transition: '.3s',

        '&:hover': {
          color: 'white'
        }
      }
    }
  }
};

function UserColorBox(props) {

  const { name, background, classes } = props;
  return (
    <div className={ classes.root } style={ { background } }>

      <span>{ name }</span>

      <div onClick={props.deleteUserColorBox}>
        <i className='icon-trash'></i>
      </div>

    </div>
  )
}

export default withStyles(styles)(UserColorBox);