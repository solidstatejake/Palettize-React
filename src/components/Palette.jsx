import React, { useState }                 from 'react'
import ColorBox                            from './ColorBox'
import NavBar                              from './NavBar'
import BackButton                          from './BackButton'
import DropDown                            from './DropDown'
import Slider, { createSliderWithTooltip } from 'rc-slider'
import 'rc-slider/assets/index.css'


const SliderWithTooltip = createSliderWithTooltip(Slider)

const Palette = (props) => {

  const [ level, mutateLevel ]                     = useState(400)
  const [ displayedFormat, mutateDisplayedFormat ] = useState('HEX')

  const handleSliderChange = (value) => mutateLevel(value)

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

  const colorBoxes = props.palette.colors[ `${ level }` ].map(color => {
    return <ColorBox key={ color.id }
                     id={ color.id }
                     paletteId={ props.palette.id }
                     background={ determineBackgroundFormat(color) }
                     name={ color.name }
                     displayShadesButton={ true }/>
  })

  return (
    <div className="Palette">
      <NavBar>
        <BackButton routeProps={ props.routeProps }/>
        <div className="NavBar__slider">
          <SliderWithTooltip
            min={ 100 }
            max={ 900 }
            step={ 100 }
            defaultValue={ level }
            onChange={ (value) => handleSliderChange(value) }
          />
        </div>
        <DropDown handleFormatChange={ handleFormatChange } displayedFormat={ displayedFormat }/>
      </NavBar>
      <header className='Palette__header'>{ props.palette.paletteName } { props.palette.emoji }</header>
      <div className="Palette__colors">{ colorBoxes }</div>
    </div>
  )
}


export default Palette