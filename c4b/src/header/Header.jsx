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
          <li><a href="/home"> home </a> </li>
          <li><a href="/new-events"> New Events </a> </li>
          <li><a href="/who-we-are"> What We Do </a> </li>
          <li><a href="/work-with-us"> Work With Us </a> </li>
          <li><a href="https://secure.codeforamerica.org/page/contribute/default?source_codes=Brigade-page&brigade=Code%20for%20Boulder"> Donate </a> </li>
          <li><a href="/get-involved"> Get Involved </a> </li>
        </ul>
      </nav>
    )
  }
  
}

export default Header;