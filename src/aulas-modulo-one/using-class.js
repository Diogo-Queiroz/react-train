'use strict'

import React, { Component } from 'react'

class UsingClass extends Component {
  render () {
    console.log('render usingClass')
    return (
      <div>
        <h3>Importando Square em outro Component.</h3>
      </div>
    )
  }
}

export default UsingClass
