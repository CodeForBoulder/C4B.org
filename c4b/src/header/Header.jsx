import React, { Component } from 'react';
import "./Header.css";

class Header extends Component {

  // Literal copy pasta of the below:
  // https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
  render() {
    return( 
      <nav className="navbar navbar-default">
        <div className="navbar-header">
          <img className="cb-logo" src="http://static1.squarespace.com/static/5ab1bc5412b13f4dc838bc43/t/5ab1c7c1562fa7620d315119/1565828100449/" width="50" height="50"/>
        </div>
        <ul className="nav navbar-nav navbar-right">
          <li> <a href="/home"> HOME </a> </li>
          <li> <a href="/new-events"> NEW EVENTS </a> </li>
          <li>
            <div className="dropdown"> 
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                WHAT WE DO
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li> <a className="dropdown-item" href="/who-we-are"> WHO WE ARE </a> </li>     
                <li> <a className="dropdown-item" href="/projects"> CURRENT PROJECTS </a> </li>
                <li> <a className="dropdown-item" href="/code-of-conduct"> CODE OF CONDUCTS </a> </li>
                <li> <a className="dropdown-item" href="/meeting-minutes"> MEETING MINUTES </a> </li>
              </div>
            </div>
          </li>
          <li> 
            <div className="dropdown"> 
              <button className="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                WORK WITH US
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li> <a className="dropdown-item" href="/project-proposals"> PROJECT PROPOSALS </a> </li>     
                <li> <a className="dropdown-item" href="/open-data-sources"> OPEN DATA SOURCES </a> </li>
                <li> <a className="dropdown-item" href="/funding-sources"> FUNDING SOURCES </a> </li>
                <li> <a className="dropdown-item" href="https://style.codeforamerica.org/"> CFA STYLE GUIDE </a> </li>
              </div>
            </div>
          </li>
          <li> <a href="https://secure.codeforamerica.org/page/contribute/default?source_codes=Brigade-page&brigade=Code%20for%20Boulder"> DONATE </a> </li>
          <li> <a href="/get-involved"> GET INVOLVED </a> </li>
        </ul>
      </nav>
    )
  }
  
}

export default Header;