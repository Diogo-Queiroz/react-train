'use strict'

import React, { PropTypes } from 'react'
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'

const AppContent = ({
  loadingUserInfo, loadingRepos, loadingStarred, errorMessage,
  userinfo, repos, starred,
  handleSearch, getRepos, getStarred
}) => (
  <div className='app'>
    <Search handleSearch={handleSearch} />
    {!!loadingUserInfo && <p>Carregando usuário, por favor aguarde...</p>}
    {!!errorMessage && <p>Usuário não encontrado, tente novamente...</p>}
    {!!userinfo && <UserInfo userinfo={userinfo} />}
    {!!userinfo &&
      <Actions
        getRepos={getRepos}
        getStarred={getStarred}
      />
    }

    {!!loadingRepos && <p>Carregando Repositórios, por favor aguarde...</p>}
    {!!repos.length &&
      <Repos
        className='repos'
        title='Repositórios'
        repos={repos}
      />
    }

    {!!loadingStarred && <p>Carregando Favoritos, por favor aguarde...</p>}
    {!!starred.length &&
      <Repos
        className='starred'
        title='Favoritos'
        repos={starred}
      />
    }
  </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  starred: PropTypes.array.isRequired,
  handleSearch: PropTypes.func,
  getStarred: PropTypes.func,
  getRepos: PropTypes.func
}

export default AppContent
