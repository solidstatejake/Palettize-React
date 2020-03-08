import React, { Component } from 'react'
import { Link }             from 'react-router-dom'


class Logo extends Component {
  constructor (props) {
    super(props)
    this.state = {
      randomColor:
        `rgb(${ Math.random() * 255 }, ${ Math.random() * 255 }, ${ Math.random() * 255 })`
    }
  }


  render () {
    const { randomColor }                  = this.state
    const { applyLeftMargin, modifyWidth } = this.props

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
}

export default Logo