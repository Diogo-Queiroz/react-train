'use strict'

import React from 'react'

const Square = ({ value }) => (
  <div style={{
    backgroundColor: value,
    height: '15px',
    width: '125px',
    margin: '15px',
    padding: '15px',
    borderRadius: '7px'
  }} />
)

export default Square
