import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div id="home-welcome" className="row">
          <img className="makers-and-doers" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521928410064-UTLIMEOC2NU09DR8NXFV/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/highres_440613770.jpeg" height="200px"/>
          <div className="helping"> Helping </div>
          <div className="makers-and-doers-text">MAKERS AND DOERS</div>
          <div className="improve-life-in-our-city">IMPROVE LIFE IN OUR CITY</div>
          <a id="join-us-button" className="btn" href="/get-involved"> JOIN US </a> 
        </div>
        <div id="who-we-are" className="row">
          <h4> WHO WE ARE </h4>
          <p> 
            Code For Boulder lies within the intersection of tech, data, and community engagement. 
            <br/>
            <br/> 
            Boulder is a vibrant city; we join up with local government, 
            non-profits, and community organizers to help bring out the best in the place we call home.
            <br/><br/>
            Founded as a brigade of Code for America, Code for Boulder hosts a weekly Meetup, hackathons, 
            and acts as an incubator for civic tech in the community.
          </p>
        </div>
        <div id="see-what-weve-been-up-to" className="row">
          <img id="see-what-weve-been-up-to-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1564624062987-4U2ROMZJERM6KFED8THI/ke17ZwdGBToddI8pDm48kKkQRVolMIxfUPitEAfxi-9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIBACqBudo3hD3yJMRucL-tAyXodZG11vxwjIEMuc29j8KMshLAGzx4R3EDFOm1kBS/Screenshot%2B2019-07-29%2B14.28.02.jpg?format=750w" />
          <div className="see-what-weve-been-up-to-text"> See what we’ve been up to </div>
        </div>
        <div className="row">
        </div>
      </div>
    )
  }
  
}

export default Home;