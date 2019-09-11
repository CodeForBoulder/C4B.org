import React, { Component } from 'react';
import './Home.css';

class Home extends Component {

  render() {
    return (
      <div className="container">
        <div id="home-welcome" className="row">
          <div className="thumbnail">
            <img id="makers-and-doers" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521928410064-UTLIMEOC2NU09DR8NXFV/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/highres_440613770.jpeg" height="200px"/>
            <p id="helping-text">HELPING</p>
            <p id="makers-and-doers-text">MAKERS AND DOERS</p>
            <p id="improve-life-text">IMPROVE LIFE IN OUR CITY</p>
            <a id="join-us-button" className="btn" href="/get-involved"> JOIN US </a> 
          </div>
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
        <div id="weve-been-upto" className="row">
          <img id="weve-been-upto-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1564624062987-4U2ROMZJERM6KFED8THI/ke17ZwdGBToddI8pDm48kKkQRVolMIxfUPitEAfxi-9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIBACqBudo3hD3yJMRucL-tAyXodZG11vxwjIEMuc29j8KMshLAGzx4R3EDFOm1kBS/Screenshot%2B2019-07-29%2B14.28.02.jpg?format=750w"/>    
          <p id="weve-been-upto-text">SEE WHAT WE'VE BEEN UP TO</p>
        </div>
        <div id="donate-and-meetup" className="row">
          <div id="donate">
            <img id="donate-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521931017805-H8WP4UA2R667SHM8BNJB/ke17ZwdGBToddI8pDm48kJ1oJoOIxBAgRD2ClXVCmKFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpziSlY8A1LmVReJFCynOXqeaWYLb3HWLzCmFZz9oDHtK-zoXiGli2Az6uRt_tQQ38k/laptop.jpeg?format=500w"/>    
            <p id="donate-text">DONATE</p>
          </div>
          <div id="meetup">
            <img id="meetup-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1564623817024-BICNPBBJ3DIDQLDKU46L/ke17ZwdGBToddI8pDm48kEfTvzXXYBW4Yy62g30dv3oUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKc9DHWRhb4IbnGEYHSPLUiHs8Lj2jFyM9CwYZ0SMXh17FqYI5yeLqn5FG2K4Bphen1/meetup.jpg?format=500w"/>    
            <p id="meetup-text">MEET UP</p>
          </div>
        </div>
        <div id="active-projects" className="row">
          <img id="active-projects-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521948000777-JCLYYE2LQFD996XF2J0Q/ke17ZwdGBToddI8pDm48kGdNgrUkOv0Ii4_J_JKU_fgUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKccyOedkLA03PAD8PGR5dO2lFk_fcJdgTeARpiYlvRDZuh8igMpaNvwiBLaKW5H37l/flatirons.jpg?format=750w"/>
          <p id="active-projects-text">ACTIVE PROJECTS</p>
        </div>
        <div id="our-partners-text" className="row">
          <h3>OUR PARTNERS</h3>
        </div>
        <div id="sponsor-images" className="image">
          <img id="code-for-america-logo" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521948414169-O6DQBFBKO58EUX0KH7JW/ke17ZwdGBToddI8pDm48kLXCf88_9uNTKXkq27cF4sB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmwbA6upbL5Bu97tJociXJklKprRMdH2Tl4F1PjaoPT3YUs5wkl5ojCV1O900UJ7ME/CfA_logo_metatag_square.png"/>
          <img id="city-for-boulder-logo" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521927471687-65TRJQBIPRYUI93CK12Q/ke17ZwdGBToddI8pDm48kMAUROnDFr3su_77ZboD82lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI9u43hzOHsj6Ny8PVwwQJLM7purG1USBBUKHPZZvEiYE/cityofboulder.png?format=300w"/>
          <img id="upslope-logo" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1557691369395-6Z67300WP8749I6T4LQ1/ke17ZwdGBToddI8pDm48kCd2h7a6GrUKx5UQMFqB6ClZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-tThsz3ASEmE9lZHBq2gdJna90oumnJklVcZ7OMnuyEgw/upslope.jpeg?format=300w"/>
        </div>
      </div>
    )
  }
  
}

export default Home;