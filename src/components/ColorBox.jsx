import React, { useState } from 'react'
import { Link }            from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'


const ColorBox = ({ background, displayShadesButton, id, name, paletteId }) => {
  const [ copied, toggleCopiedState ] = useState(false)

  const changeCopyState = () => {
    toggleCopiedState(true)
    setTimeout(() => toggleCopiedState(false), 700)
  }

  return (
    <CopyToClipboard text={ background } onCopy={ changeCopyState }>

      <div className="ColorBox" style={ { background } }>

        <div className={ `ColorBox__overlay ${ copied && 'ColorBox__active' }` }
             style={ { background } }>
          <div className={ `ColorBox__active--message ${ copied
                                                         && 'ColorBox__active--message-active' }` }>
            <h1>Copied!</h1>
            <p>{ background }</p>
          </div>
        </div>

        <button className="ColorBox__button--copy">Copy</button>

        <span className='ColorBox__content--color-name'
              style={ name.length > 18 ? { fontSize: '.8rem' } : {} }
        >
            { name }
        </span>

        { displayShadesButton &&
          <Link to={ `/palette/${ paletteId }/${ id }` }
                onClick={ e => e.stopPropagation() }
                className='ColorBox__button--see-more'>
            <span>Shades</span>
          </Link> }
      </div>

    </CopyToClipboard>
  )

}

export default ColorBox