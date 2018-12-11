// Code DelayedButton Component Here
import React, {Component} from 'react'

class DelayedButton extends Component {

  render(){
    return (
      <button onClick={event => setTimeout(event => this.props.onDelayedClick(event), this.props.delay)}/>
    )
  }
}

export default DelayedButton
