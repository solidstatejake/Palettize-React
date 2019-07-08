import React, { Component } from 'react';

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleGoBack = this.handleGoBack.bind(this);
  }

  handleGoBack() {
    const { history } = this.props.routeProps;
    history.goBack();
  }

  render() {
    return (
      <button className='BackButton' onClick={ () => this.handleGoBack() }>
        <span className='BackButton__text'>
          Go Back
        </span>
      </button>
    );
  }
}

export default BackButton;