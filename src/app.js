'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      starred: []
    }
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13
    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          console.log(result)
          this.setState({
            userinfo: {
              username: result.name,
              avatar: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following,
              repos_url: result.repos_url,
              starred_url: result.starred_url
            }
          })
        })
    }
  }

  handleRepos (e) {
    ajax().get(this.state.userinfo.repos_url)
      .then((reposList) => {
        console.log(reposList)
        this.setState({
          repos: reposList
        })
      })
  }

  handleStarred (e) {
    ajax().get(this.state.userinfo.starred_url)
      .then((starredList) => {
        console.log(starredList)
        this.setState({
          starred: starredList
        })
      })
  }

  render () {
    return <AppContent
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      handleRepos={(e) => this.handleRepos(e)}
      handleStarred={(e) => this.handleStarred(e)}
    />
  }
}

export default App
