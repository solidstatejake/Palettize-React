import React               from 'react'
import { SortableElement } from 'react-sortable-hoc'
import { withStyles }      from '@material-ui/styles'


const styles = {
  root: {
    display:             'grid',
    cursor:              'grab',
    fontSize:            '1rem',
    gridTemplateRows:    '17rem 3rem',
    gridTemplateColumns: '17rem 3rem',
    gridTemplateAreas:   '". ." "title trash"',
    height:              '20rem',
    letterSpacing:       '.2rem',
    textTransform:       'uppercase',
    width:               '20rem',

    '&:active': {
      cursor: 'move'
    },

    '&:focus-within': {
      cursor: 'grabbing'
    },

    '& span': {
      gridArea:   'title',
      marginLeft: '1rem'
    },

    '& div': {
      gridArea:   'trash',
      textAlign:  'center',
      lineHeight: '3rem',

      '& i': {
        fontSize:   '1.3rem',
        cursor:     'pointer',
        transition: '.3s',

        '&:hover': {
          color: 'white'
        }
      }
    }
  }
}

function UserColorBox (props) {
  const { name, background, classes, deleteUserColorBox } = props
  return (
    <div className={ classes.root } style={ { background } }>

      <span>{ name }</span>
      <div onClick={ deleteUserColorBox }>
        <i className='icon-trash'/>
      </div>

    </div>
  )
}

export default SortableElement(withStyles(styles)(UserColorBox))