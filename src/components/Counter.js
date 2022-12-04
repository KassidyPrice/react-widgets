import { Component } from 'react'

export default class Counter extends Component {
  constructor() {
    super()

    this.state = {
      count: 0,
    }
  }

  addCount = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 }
    })
  }

  subCount = () => {
    this.setState((prevState) => {
      return prevState.count > 0 ? { count: prevState.count - 1 } : 0
    })
  }

  render() {
    return (
      <div className='counter'>
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.addCount}>Add</button>
          <button onClick={this.subCount}>Sub</button>
        </div>
        <hr />
      </div>
    )
  }
}
