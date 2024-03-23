import React, { Component } from 'react'
import Nav from './components/Nav'
import NewCom from './components/NewCom'

export default class App extends Component {
  render() {
    return (
      <>
      <Nav/>
      <NewCom page_size={5} country={'us'}/>
      </>
    )
  }
}
