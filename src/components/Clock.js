import { Component } from 'react'

export default class Clock extends Component {
  constructor() {
    super()

    this.state = {
      time: new Date().toLocaleTimeString(),
      toggle: false,
    }
  }

  componentDidMount() {
    this.intervalID = setInterval(() => this.setClock(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.intervalID)
  }

  setClock = () => {
    this.setState(() => {
      return { time: new Date().toLocaleTimeString() }
    })
  }

  setToggle = () => {
    this.setState((prevState) => {
      return { toggle: !prevState.toggle }
    })
  }

  render() {
    return (
      <div className='clock'>
        <h1>{this.state.toggle ? this.state.time : ''}</h1>
        <button onClick={this.setToggle}>
          {this.state.toggle ? 'Unmount' : 'Mount'}
        </button>
        <hr />
      </div>
    )
  }
}
