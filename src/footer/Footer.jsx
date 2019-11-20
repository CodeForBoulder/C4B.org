import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {

  render() {
    return( 
      <footer class="page-footer font-small cyan darken-3">
        <ul class="list-unstyled list-inline text-center">
          <img id="medium-logo"/>
          <img id="twitter-logo"/>
          <img id="meetup-logo"/>
        </ul>
        <div class="footer-copyright text-center py-3">
          Copyright (c) 2018, Code For Boulder
        </div>
      </footer>
    )
  }
  
}

export default Footer;