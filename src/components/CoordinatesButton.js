import React, {Component} from 'react';

class CoordinatesButton extends Component {
  findCoordinates (event) { //could do this as arrow function instead
    let x = event.clientX
    let y = event.clientY
    console.log(x, y);
    this.props.onReceiveCoordinates([x,y])
  }

  render () {
    return (
      <button onClick={ this.findCoordinates.bind(this) }> coords</button>
    )
  }
}

export default CoordinatesButton
