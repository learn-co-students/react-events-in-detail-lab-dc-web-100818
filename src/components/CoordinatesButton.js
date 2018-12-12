import React, {Component} from 'react'

class CoordinatesButton extends Component {
   clicker = (event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])
   
   render() {
      return (
         <button onClick={this.clicker}/>
      )
   }
}

export default CoordinatesButton
