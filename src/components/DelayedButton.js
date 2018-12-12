import React, {Component} from 'react'

class DelayedButton extends Component {

  render() {
    return (
      <button onClick={this.handleClick}/>
    )
  }

  handleClick = (event) => {
    event.persist()
    this.props.onDelayedClick(event)
  }

}

export default DelayedButton
