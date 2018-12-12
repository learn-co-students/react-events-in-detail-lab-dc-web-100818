import React, {Component} from 'react'

class CoordinatesButton extends Component {

  render() {
    return (
      <button onClick={this.handleEvent} />
    )
  }

  handleEvent = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }

}

export default CoordinatesButton
