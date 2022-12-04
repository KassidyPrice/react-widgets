import { Component } from 'react'

export default class ColorChanger extends Component {
  constructor() {
    super()

    this.state = {
      input: '',
      color: 'yellow',
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(e) {
    this.setState({
      input: e.target.value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      color: this.state.input,
      input: '',
    })
  }

  render() {
    return (
      <div className='colorChanger'>
        <h1 style={{ color: `${this.state.color}` }}>{this.state.color}</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Enter an HTML color'
            onChange={this.handleChange}
            value={this.state.input}
          />
          <button type='submit' disabled={this.state.input.length < 1}>
            Change Color
          </button>
        </form>
        <hr />
      </div>
    )
  }
}
