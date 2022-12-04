import { Component } from 'react'

export default class ShowHide extends Component {
  constructor() {
    super()

    this.state = {
      toggle: true,
    }
  }

  setToggle = () => {
    this.setState((prevState) => {
      return { toggle: !prevState.toggle }
    })
  }

  render() {
    return (
      <div className='showHide'>
        <h1>{this.state.toggle ? 'Hide Me' : ''}</h1>
        <button onClick={this.setToggle}>
          {this.state.toggle ? 'Hide' : 'Show'}
        </button>
        <hr />
      </div>
    )
  }
}
