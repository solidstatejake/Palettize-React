import React from 'react'


/**
 This component is thus far used for the |HEX| |RGB| |RGBA| buttons in the DropDown
 comp found in pages where one views palettes.
 @param displayedFormat
 Refers to HEX, RGB, or RGBA. The *current* format in which colors are copied.
 @param formatType
 Refers to the strings "HEX", "RGB", "RGBA".
 @param changeFormat
 Original function can be found in both <Palette/> and <SingleColorPalette/>
 (i.e. handleFormatChange() ). It sets the displayed format for the palette as @formatType.
 @param displayMenu
 A boolean value which resides in <DropDown/>. If true display color
 format menu. Else, don't. @displayMenu and @toggleDisplayMenu are hooks residing in
 <DropDown/>.
 @param toggleDisplayMenu
 Toggles display of color format menu. @displayMenu and @toggleDisplayMenu are hooks
 residing in <DropDown/>.
 */

const DropDownItem = ({ displayedFormat, formatType, changeFormat, displayMenu, toggleDisplayMenu }) =>
  <div
    className="DropDownItem"
    style={ displayedFormat === formatType ? { backgroundColor: 'orange' } : {} }
    onClick={ () => {
      changeFormat(formatType)
      toggleDisplayMenu(!displayMenu)
    } }
  >
    { formatType }
  </div>

export default DropDownItem