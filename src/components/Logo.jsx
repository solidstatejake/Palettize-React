import React, { useState } from 'react'
import { Link }            from 'react-router-dom'


const Logo = (props) => {
  //Instead of having a setter for randomColor, Math.random() is called on each rerender.
  const [ randomColor] = useState(()=> `rgb(${ Math.random() * 255 }, ${ Math.random() * 255 }, ${ Math.random() * 255 })`)


  const { applyLeftMargin, modifyWidth } = props
  let headerStyle
  if (applyLeftMargin)
    headerStyle = { marginLeft: '3rem' }
  else if (modifyWidth)
    headerStyle = { width: '20rem', textAlign: 'center' }

  return (
    <div className="NavBar__logo--container"
         style={ headerStyle }
    >
      <Link to='/'>
        <div className="NavBar__logo--text"
             style={ { color: randomColor, textShadow: `0 0 1rem ${ randomColor }` } }
        >
          Palettize
        </div>
      </Link>
    </div>
  )

}

export default Logo