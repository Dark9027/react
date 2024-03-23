import React, { Component } from 'react'
import Spinner from "./XOsX.gif"
export class Loading extends Component {
  render() {
    return (
        <div style={{textAlign:"center"}} className="container">
      <img style={{maxHeight:"18vh"}} src={Spinner} alt="Loading..." /></div>
    )
  }
}

export default Loading