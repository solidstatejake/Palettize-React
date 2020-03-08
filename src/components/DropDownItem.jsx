import React from 'react'


const DropDownItem = ({ displayedFormat, formatType, changeFormat, displayMenu }) =>
  <div
    className="DropDownItem"
    style={ displayedFormat === formatType ? { backgroundColor: 'orange' } : {} }
    onClick={ () => {
      changeFormat(formatType)
      displayMenu()
    } }
  >
    { formatType }
  </div>

export default DropDownItem