'use strict'

import React from 'react'

const Actions = ({ handleRepos, handleStarred }) => (
  <div className='actions'>
    <button className='btn' handleRepos={handleRepos}>
      Ver Repositórios
    </button>
    <button className='btn' handleStarred={handleStarred}>
      Ver Favoritos
    </button>
  </div>
)

Actions.propTypes = {
  handleRepos: React.PropTypes.func.isRequired,
  handleStarred: React.PropTypes.func.isRequired
}

export default Actions
