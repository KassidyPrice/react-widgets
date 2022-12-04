import { Component } from 'react'

export default class FontSizer extends Component {
  constructor() {
    super()

    this.state = {
      fontSize: 5,
    }
  }

  growSize = () => {
    this.setState((prevState) => {
      return prevState.fontSize < 100
        ? { fontSize: prevState.fontSize + 5 }
        : { fontSize: 100 }
    })
  }

  shrinkSize = () => {
    this.setState((prevState) => {
      return prevState.fontSize > 5
        ? { fontSize: prevState.fontSize - 5 }
        : { fontSize: 5 }
    })
  }

  render() {
    return (
      <div className='fontSizer'>
        <div>
          <button onClick={this.growSize}>Grow</button>
          <button onClick={this.shrinkSize}>Shrink</button>
        </div>
        <p style={{ fontSize: `${this.state.fontSize}px` }}>
          {this.state.fontSize}px
        </p>
        <hr />
      </div>
    )
  }
}
