import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">NewsWorld</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/About">About</a>
            </li>
          </ul>
        </div>
        <span style={{fontSize:"small"}}>Total_Visitor:</span><img src="https://www.cutercounter.com/hits.php?id=hmxockcf&nd=8&style=1" border="0" alt="website counter"/>
      </nav>
    )
  }
}

export default Nav