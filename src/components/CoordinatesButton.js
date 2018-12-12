import React, { Component } from 'react'

class CoordinatesButton extends Component{
  render(){
    return <button onClick={this.handleCoordinates}>Coordinates</button>
  }

  handleCoordinates = (event) => {
    let coords = [event.clientX, event.clientY]
    //Because this is an instance function (inside of a class) we must use this.props to access props
    //from the parent (index.js)
    //onReceiveCoordinates is a prop set to a function (assigned in the parent-index.js)
    //by calling this.props.onReceiveCoordinates, we are passing in coords as the argument to the function
    //defined in the parent
    this.props.onReceiveCoordinates(coords)
  }
}

export default CoordinatesButton
