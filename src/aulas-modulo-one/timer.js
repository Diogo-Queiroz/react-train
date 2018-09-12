'use strict'

import React, { Component } from 'react'

class Timer extends Component {
  constructor () {
    console.log('constructor timer')
    super()
    this.state = {
      time: 0
    }
    this.timer
  }

  componentDidMount () {
    console.log('componentDidMount timer')
    this.timer = setInterval(() => {
      this.setState({
        time: this.state.time + 1
      })
    }, 500)
  }

  componentWillUnmount () {
    console.log('componentWillUnmount timer')
    clearInterval(this.timer)
  }

  render () {
    return (
      <div>Timer: {this.state.time}</div>
    )
  }
}

export default Timer
