import React          from 'react'
import { Link }       from 'react-router-dom'
import { withStyles } from '@material-ui/styles'


const styles = {

  root: {
    alignItems:      'center',
    backgroundColor: 'white',
    border:          '1px solid black',
    display:         'flex',
    flexDirection:   'column',
    justifyContent:  'center',
    width:           '30rem',
    height:          ' 31rem',

    '@media screen and (max-width: 620px)': {
      borderBottom: '1px solid black',
      height:       'auto',
      width:        '100vw'
    }
  },

  boxes_container: {
    alignItems:     'center',
    display:        'flex',
    flexWrap:       'wrap',
    height:         '20rem',
    justifyContent: 'start',
    marginBottom:   '2rem',
    width:          '25rem',

    '@media screen and (max-width: 620px)': {
      height:       '29.1rem',
      marginBottom: '0',
      width:        '100vw'

    }
  },
  palette_title:   {
    fontSize: '1.3rem'
  },
  color_box:       {
    width:                                  '5rem',
    height:                                 '5rem',
    '@media screen and (max-width: 620px)': {
      height: '20%',
      width:  '25%'
    }
  },
  body:            {
    textAlign: 'center'
  },
  delete:          {
    lineHeight: '2rem',
    fontSize:   '2rem',
    marginTop:  '1rem',
    zIndex:     '10',

    '&:hover': {
      color: 'red'
    }
  }
}

const MiniPalette = ({ classes, colors, deleteMiniPalette, emoji, id, paletteName, palettesToKeep, routeProps }) => {

  const miniColorBoxes = colors.map(color =>
    <div key={ color.color }
         className={ classes.color_box }
         style={ { background: color.color } }
    />)

  return (
    <div className={ classes.root }>
      <Link to={ `/palette/${ id }` }>
        <div className={ classes.body }>
          <div className={ classes.boxes_container }>
            { miniColorBoxes }
          </div>
          <div className={ classes.palette_title }>
            { paletteName } { emoji }
          </div>
        </div>
      </Link>

      {
        !palettesToKeep.includes(id) &&
        <div className={ classes.delete }
             onClick={ () => ( deleteMiniPalette(id) &&
        routeProps.history.push('/') ) }>
          <i className='icon-trash'/>
        </div>
      }
    </div>
  )
}

export default withStyles(styles)(MiniPalette)