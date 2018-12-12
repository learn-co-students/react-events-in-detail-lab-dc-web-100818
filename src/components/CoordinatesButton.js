// Code CoordinatesButton Component Here
import React from 'react'


class CoordinatesButton extends React.Component {
  createArray = (event) => {
     let arr = [event.clientX, event.clientY]
     return arr;
  }
  render () {
    return(
      <button onClick = { (event) => {
      let xy = this.createArray(event)

      this.props.onReceiveCoordinates(xy)
      }}>Click me So that I can log the Coordinates</button>
    )
  }
}

export default CoordinatesButton ;
