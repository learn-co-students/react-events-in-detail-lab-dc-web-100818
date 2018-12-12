// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {

  handleDelayClick = (event) => {
    event.persist() //event only lasts for a hot sec. therefore u need to persist it so it can be used asynchronously
    setTimeout(()=> {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }

  render() {
    return (
        <button
          onClick = {this.handleDelayClick}
        >
        delayed
        </button>
    )
  }
}
