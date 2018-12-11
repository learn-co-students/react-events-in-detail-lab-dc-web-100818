import React, { Component } from 'react'

class CoordinatesButton extends Component {
  render() {
    console.log(this.props)
    return (
      <button onClick={this.clickHandler}>
      </button>
    )
  }

  clickHandler = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }
}

export default CoordinatesButton
