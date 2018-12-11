import React, { Component } from 'react'

class DelayedButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button onClick={this.clickHandler}>
      </button>
    )
  }

  clickHandler = (event) => {
    event.persist()
    setTimeout(this.props.onDelayedClick, this.props.delay, event)
  }
}

export default DelayedButton
