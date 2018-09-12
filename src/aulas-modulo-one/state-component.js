'use strict'

import React, { Component } from 'react'

class StateComponent extends Component {
  constructor () {
    console.log('constructor stateComponent')
    super()
    this.state = {
      text: 'Diogo'
    }
  }

  render () {
    return (
      <div className='container' onClick={() => this.setState({
        text: 'Fernandes de Queiroz'
      })}>
        {this.state.text}
      </div>
    )
  }
}

export default StateComponent
