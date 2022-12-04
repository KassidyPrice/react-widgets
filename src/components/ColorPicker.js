import { Component } from 'react'

export default class ColorChanger extends Component {
  constructor() {
    super()

    this.state = {
      red: 0,
      green: 0,
      blue: 0,
    }
    this.setRed = this.setRed.bind(this)
    this.setGreen = this.setGreen.bind(this)
    this.setBlue = this.setBlue.bind(this)
  }

  setRed(e) {
    this.setState({
      red: e.target.value,
    })
  }

  setGreen(e) {
    this.setState({
      green: e.target.value,
    })
  }

  setBlue(e) {
    this.setState({
      blue: e.target.value,
    })
  }

  render() {
    return (
      <div className='colorPicker'>
        <div
          className='colorBox'
          style={{
            width: '150px',
            height: '100px',
            margin: '25px',
            backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`,
          }}
        ></div>
        <p>
          rgb({this.state.red},{this.state.green},{this.state.blue})
        </p>
        <div className='sliderContainer'>
          <div>
            <label>Red: {this.state.red}</label>
            <input
              type='range'
              min='0'
              max='255'
              steps='1'
              value={this.state.red}
              onChange={this.setRed}
            />
          </div>
          <div>
            <label>Green: {this.state.green}</label>
            <input
              type='range'
              min='0'
              max='255'
              steps='1'
              value={this.state.green}
              onChange={this.setGreen}
            />
          </div>
          <div>
            <label>Blue: {this.state.blue}</label>
            <input
              type='range'
              min='0'
              max='255'
              steps='1'
              value={this.state.blue}
              onChange={this.setBlue}
            />
          </div>
        </div>
      </div>
    )
  }
}
