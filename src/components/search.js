'use strict'

import React from 'react'

const Search = ({ handleSearch }) => (
  <div>
    <input
      className='search-bar'
      type='search'
      placeholder='Digite o nome do usuário no GitHub'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: React.PropTypes.func.isRequired
}

export default Search
