// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {


  handleClick = (event) => {
    let arr = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(arr)
  }

  render() {
    return (
      <button onClick={this.handleClick}>coordinates button</button>
    )
  }
}

export default CoordinatesButton
