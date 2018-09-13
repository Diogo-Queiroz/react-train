'use strict'

import React from 'react'

const Actions = ({ getRepos, getStarred }) => (
  <div className='actions'>
    <button
      className='btn'
      onClick={getRepos}>
        Ver Repositórios
    </button>
    <button
      className='btn'
      onClick={getStarred}>
        Ver Favoritos
    </button>
  </div>
)

Actions.propTypes = {
  getRepos: React.PropTypes.func.isRequired,
  getStarred: React.PropTypes.func.isRequired
}

export default Actions
