'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      errorMessage: false,
      loadingUserInfo: false,
      loadingRepos: false,
      loadingStarred: false,
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
      console.log('searching for...', e.target.value)
      this.setState({
        loadingUserInfo: true,
        errorMessage: false
      })
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          console.log(result)
          this.setState({
            loadingUserInfo: false,
            errorMessage: false,
            userinfo: {
              username: result.name,
              avatar: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
        .catch((err) => {
          if (err.message === 'Not Found') {
            console.log('Usuário não encontrado, conferir o nome digitado e tente novamente')
            this.setState({
              loadingUserInfo: false,
              errorMessage: true
            })
          }
        })
    }
  }

  getRepos () {
    const value = this.state.userinfo.login
    console.log('searching for repos...', value)
    this.setState({
      loadingRepos: true
    })
    ajax().get(`https://api.github.com/users/${value}/repos`)
      .then((reposList) => {
        let tempRepos = []
        console.log(reposList)
        for (let i = 0; i < reposList.length; i++) {
          tempRepos.push({
            link: reposList[i].html_url,
            name: reposList[i].name
          })
        }
        this.setState({
          loadingRepos: false,
          repos: tempRepos
        })
      })
  }

  getStarred () {
    const value = this.state.userinfo.login
    console.log('searching for starred...', value)
    this.setState({
      loadingStarred: true
    })
    ajax().get(`https://api.github.com/users/${value}/starred`)
      .then((starredList) => {
        let tempStarred = []
        console.log(starredList)
        for (let i = 0; i < starredList.length; i++) {
          tempStarred.push({
            link: starredList[i].html_url,
            name: starredList[i].name,
            ownerLogin: starredList[i].owner.login,
            ownerLink: starredList[i].owner.html_url
          })
        }
        this.setState({
          loadingStarred: false,
          starred: tempStarred
        })
      })
  }

  render () {
    return <AppContent
      errorMessage={this.state.errorMessage}
      loadingUserInfo={this.state.loadingUserInfo}
      loadingRepos={this.state.loadingRepos}
      loadingStarred={this.state.loadingStarred}
      userinfo={this.state.userinfo}
      repos={this.state.repos}
      starred={this.state.starred}
      handleSearch={(e) => this.handleSearch(e)}
      getRepos={() => this.getRepos()}
      getStarred={() => this.getStarred()}
    />
  }
}

export default App
