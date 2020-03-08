import React from 'react'


const BackButton = props => {

  const handleGoBack = () => {
    const { history } = props.routeProps
    history.goBack()
  }

  return (
    <button className='BackButton' onClick={ () => handleGoBack() }>
        <span className='BackButton__text'>
          Go Back
        </span>
    </button> )
}

export default BackButton