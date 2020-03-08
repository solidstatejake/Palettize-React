import React       from 'react'
import { Link }    from 'react-router-dom'
import MiniPalette from './MiniPalette'
import NavBar      from './NavBar'


const PaletteList = ({ deleteMiniPalette, palettes, palettesToKeep, routeProps }) => {

  const miniPalettes = palettes.map(palette => (
    <MiniPalette
      key={ palette.id }
      id={ palette.id }
      routeProps={ routeProps }
      palettesToKeep={ palettesToKeep }
      deleteMiniPalette={ deleteMiniPalette }
      { ...palette }
    /> ))

  return (
    <div className='PaletteList'>

      <NavBar applyLeftMargin={ true }>
        <Link className='PaletteList__link--new-palette' to='/palette/new'>
          <div>
            Create New Palette
          </div>
        </Link>
      </NavBar>

      <div className='PaletteList__container'>
        { miniPalettes }
      </div>
    </div>
  )

}


export default PaletteList