import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <Link className="navbar-brand" to="/">NewsWorld</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
        
            <li className="nav-item">
              <Link className="nav-link" to="/business">business</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/entertainment">entertainment</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/general">general</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/health">health</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/science">science</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/sports">sports</Link></li>
            <li className="nav-item">
              <Link className="nav-link" to="/technology">technology</Link></li>
          </ul>
          <span style={{fontSize:"small"}}>Total_Visitor:-</span><img src="https://www.cutercounter.com/hits.php?id=hmxockcf&nd=8&style=1" border="0" alt="website counter"/>
        </div>
        
      </nav>
    )
  }
}

export default Nav