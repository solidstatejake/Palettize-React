import React, { useState } from 'react'
import DropDownItem        from './DropDownItem'

/**
 * @param handleFormatChange
 * Passed from <SingleColorPalette/> and <Palette/>. Handles update of the
 * format (i.e. HEX, RGB, RGBA) which colors are copied in.
 * @param displayedFormat
 * The current format in which colors are begin displayed in <SingleColorPalette/> and
 * <Palette/>.
 */
const DropDown = ({ handleFormatChange, displayedFormat }) => {

  const [ displayMenu, toggleDisplayMenu ] = useState(false)


  const changeFormat = (formatValue) => {
    handleFormatChange(formatValue)
  }

  const formatTypes   = [ 'HEX', 'RGB', 'RGBA' ]
  const dropDownItems = formatTypes.map((type) =>
    <DropDownItem
      formatType={ type }
      changeFormat={ changeFormat }
      displayMenu={ displayMenu }
      toggleDisplayMenu={ toggleDisplayMenu }
      displayedFormat={ displayedFormat }
    />
  )

  return (
    <div className="DropDown">

      <div className="DropDown__text"
           onClick={ () => toggleDisplayMenu(!displayMenu) }>
        Color Format { displayedFormat }
      </div>
      <div className={ `DropDown__menu ${ displayMenu && 'DropDown__menu--active' }` }>
        { dropDownItems }
      </div>

    </div>
  )
}


export default DropDown