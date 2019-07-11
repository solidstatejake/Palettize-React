import React from 'react';
import { SortableContainer } from 'react-sortable-hoc';
import UserColorBox from './UserColorBox';

function DraggableGrid({ displayDrawerContents, colorsInUserPalette, deleteUserColorBox }) {

    console.log(displayDrawerContents);
  return (
    <div className="NewPaletteForm__colors"
         style={ displayDrawerContents ? { height: "56rem" } : {} }
    >
      { colorsInUserPalette.map((color, index) => {
        return <UserColorBox
          index={ index }
          key={ color.name }
          id={ color.name }
          background={ color.color }
          name={ color.name }
          deleteUserColorBox={ () => deleteUserColorBox(color.name) }
        />
      }) }
    </div>
  )
}

export default SortableContainer(DraggableGrid);