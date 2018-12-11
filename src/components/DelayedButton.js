import React, {Component} from 'react';

class DelayedButton extends Component {

  delayTheClick = (event) => {
    event.persist()
    setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
  }

  render() {
    return(
      <button onClick={this.delayTheClick} >delay </button>
    )
  }
}

// clickHandler(e) => {
//   e.persist()
//   e.target.value
//   doSomething(e)
// }


export default DelayedButton
