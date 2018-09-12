'use strict'

import React, { Component } from 'react'
import Title from './title'
import PureFunc from './pure-func'
import UsingClass from './using-class'
import Square from './square'
import Button from './button'
import LikeButton from './button-like'
import SearchButton from './button-search'
import StateComponent from './state-component'
import Timer from './timer'

class App extends Component {
  constructor () {
    console.log('constructor app')
    super()
    this.state = {
      color: 'purple',
      showTimer: true
    }
  }
  render () {
    return (
      <div className='container' >
        <Title lastName='Queiroz' />
        <label id='label' htmlFor='Input'>Input:</label>
        <input type='text' aria-label='input' data-js='input text' />
        <PureFunc />
        <UsingClass />
        {['blue', 'red', 'purple', 'green', 'blue'].map((item, index) => (
          <Square key={index} value={item} />
        ))}
        <Button>
          <span>Texto</span>
          outro Texto
        </Button>
        <LikeButton />
        <SearchButton />
        <StateComponent />
        {this.state.showTimer && <Timer />}
        <Button handleClick={() => this.setState({
          showTimer: !this.state.showTimer
        })}>
          Show/Hide Timer
        </Button>
        <Square value={this.state.color} />
        {['red', 'blue', 'green', 'yellow', 'purple'].map((color) => (
          <Button key={color} handleClick={() => (
            this.setState({
              color
            })
          )}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}

export default App
