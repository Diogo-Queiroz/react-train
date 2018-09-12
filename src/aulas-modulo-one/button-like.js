'use strict'

import React from 'react'
import Button from './button'

const LikeButton = () => (
  <Button handleClick={() => alert('liked')}>
    Curtir
  </Button>
)

export default LikeButton
