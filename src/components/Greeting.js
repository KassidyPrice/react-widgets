import { Component } from 'react'

export default class Greeting extends Component {
  constructor() {
    super()

    this.state = {
      greeting: 'Hello',
    }
  }

  toggleGreeting = () => {
    this.setState((prevState) => {
      return prevState.greeting === 'Hello'
        ? { greeting: 'Goodbye' }
        : { greeting: 'Hello' }
    })
  }

  render() {
    return (
      <div className='greeting'>
        <h1>{this.state.greeting}</h1>
        <button onClick={this.toggleGreeting}>Toggle Me</button>
        <hr />
      </div>
    )
  }
}
