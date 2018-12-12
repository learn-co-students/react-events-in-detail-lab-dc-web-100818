// Code DelayedButton Component Here
import React from 'react'
import PropTypes from 'prop-types'

class DelayedButton extends React.Component {

  passEvent = (event) => {
    event.persist()
    setTimeout( ()=>this.props.onDelayedClick(event), this.props.delay)
  }

  render () {

    return(
      <button onClick={this.passEvent}>Delaaaaaaayyyyyyyyy</button>
    )
  }
}

export default DelayedButton;
