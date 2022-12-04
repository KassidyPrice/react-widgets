import { Component } from 'react'

export default class TextAligner extends Component {
  constructor() {
    super()

    this.state = {
      alignment: '',
    }
  }

  setAlignLeft = () => {
    this.setState(() => {
      return { alignment: 'flex-start' }
    })
  }

  setAlignCenter = () => {
    this.setState(() => {
      return { alignment: 'center' }
    })
  }

  setAlignRight = () => {
    this.setState(() => {
      return { alignment: 'flex-end' }
    })
  }

  render() {
    return (
      <div className='textAligner'>
        <h1 style={{ alignSelf: `${this.state.alignment}` }}>Push Me Around</h1>
        <div>
          <button onClick={this.setAlignLeft}>Left</button>
          <button onClick={this.setAlignCenter}>Center</button>
          <button onClick={this.setAlignRight}>Right</button>
        </div>
        <hr />
      </div>
    )
  }
}
