import React, { Component } from 'react';

class Header extends Component {

  render() {
    return( 
      <div className="cfb-header">
        <img src="http://static1.squarespace.com/static/5ab1bc5412b13f4dc838bc43/t/5ab1c7c1562fa7620d315119/1565828100449/" width="50" height="50"/>
        <a href="/home"> home </a>
        <a href="/new-events"> New Events </a>
        <a href="/who-we-are"> What We Do </a>
        <a href="/work-with-us"> Work With Us </a>
        <a href="https://secure.codeforamerica.org/page/contribute/default?source_codes=Brigade-page&brigade=Code%20for%20Boulder"> Donate </a>
        <a href="/get-involved"> Get Involved </a>
      </div>
    )
  }
  
}

export default Header;