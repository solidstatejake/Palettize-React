import React, { useState } from 'react'
import ColorBox            from './ColorBox'
import NavBar              from './NavBar'
import BackButton          from './BackButton'
import DropDown            from './DropDown'


const SingleColorPalette = (props) => {

  const [ displayedFormat, mutateDisplayedFormat ] = useState('HEX')

  const grabShades = () => {
    const { colors } = props.palette
    return Object.keys(colors).map(key => {
      return colors[ key ].find(color => {
        return color.id === props.routeProps.match.params.colorId
      })
    })
  }

  const handleFormatChange = (formatValue) => mutateDisplayedFormat(formatValue)


  const determineBackgroundFormat = (colorObject) => {
    switch (displayedFormat) {
      case 'HEX':
        return colorObject.hex
      case 'RGB':
        return colorObject.rgb
      case 'RGBA':
        return colorObject.rgba
      default:
        return colorObject.hex
    }
  }


  const { paletteName, emoji } = props.palette
  const singleColorPalette     = grabShades()
  const singleColorBoxes       = singleColorPalette.map((colorObject) => {
    return <ColorBox
      key={ colorObject.hex }
      id={ colorObject.id }
      background={ determineBackgroundFormat(colorObject) }
      name={ colorObject.name }
    />
  })

  return (
    <div className='SingleColorPalette'>
      <NavBar modifyWidth={ true }>
        <BackButton routeProps={ props.routeProps }/>

        <DropDown handleFormatChange={ handleFormatChange }
                  displayedFormat={ displayedFormat }/>
      </NavBar>

      <header className='SingleColorPalette__header'>
        { paletteName } { emoji }
      </header>

      <div className="SingleColorPalette__body">
        <div className='SingleColorPalette__colors'>
          { singleColorBoxes }
        </div>
      </div>
    </div>
  )
}


export default SingleColorPalette