// Code CoordinatesButton Component Here
import React, {Component} from 'react'

export default class CoordinatesButton extends Component {

  logCoordinates = (event) => {
        let x = event.clientX
        let y = event.clientY

        let arr = [x, y]
        this.props.onReceiveCoordinates(arr)
      }
      
  render(){
    console.log(this.props)
    return(
      <div>
      <button onClick={this.logCoordinates}>
      Coords Btn
      </button>
      </div>
    )
  }


}
