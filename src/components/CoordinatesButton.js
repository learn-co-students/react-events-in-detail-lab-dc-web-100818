import React, { Component } from 'react'

class CoordinatesButton extends Component{
  render(){
    return <button onClick={this.handleCoordinates}>Coordinates</button>
  }

  handleCoordinates = (event) => {
    return [event.clientX, event.clientY]
  }
}

export default CoordinatesButton
