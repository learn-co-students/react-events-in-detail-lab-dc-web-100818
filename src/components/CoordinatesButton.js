// Code CoordinatesButton Component Here

import React, { Component } from "react";

class CoordinatesButton extends Component {

  handleOnClick = (event) => {
    let x = event.clientX
    let y = event.clientX

    let array = [x, y]

    this.props.onReceiveCoordinates(array)
  }

  render() {
    return (
      <button onClick={this.handleOnClick}></button>
    )
  }
}

export default CoordinatesButton;