import React, {Component} from 'react';
import './Projects.css'

class Project extends Component  {
    render() {
        return(
            <div className="container">
                <div id="active-projects-div" row="row">
                    <div className="thumbnail">
                        <img id="active-project-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521935489614-URXS0ORPWBVAXIZJK2NL/ke17ZwdGBToddI8pDm48kJ1oJoOIxBAgRD2ClXVCmKFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpziSlY8A1LmVReJFCynOXqeaWYLb3HWLzCmFZz9oDHtK-zoXiGli2Az6uRt_tQQ38k/highres_468675967.jpeg?format=1000w"/>
                        <p id="active-project-text">ACTIVE COMMUNITY PROJECT</p>
                    </div>
                </div>
                <div id="projects-row" className="row">
                    <div id="project">
                      <img id="project-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1521935958352-QEAQBVTUE7X8795CZT8S/ke17ZwdGBToddI8pDm48kI8ClEqjCmQgdtJA4vhtk2dZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwBUxnvTOyyo6cqk8BaSWlPQ1x02igfIId6O7RuSGS0eFS6hS-L23QXzwhS9qqHfSU/Kalicos.png"/>    
                      <p id="project-text">
                          Global Charity Finder
                          An Interactive Map to easily search a growing database of Non-profit donation needs, 
                          volunteer options and fundraising events by location.
                          GitHub Link | Trello Board 
                      </p>
                    </div>
                    <div id="project">
                      <img id="project-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1564016203335-DZNBOAI0M2C06XQJP1FH/ke17ZwdGBToddI8pDm48kMsmIZUQl5D8Rk2ZWmgPLyxZw-zPPgdn4jUwVcJE1ZvWEtT5uBSRWt4vQZAgTJucoTqqXjS3CfNDSuuf31e0tVHD9qfZvKXnZz302vBqg0MFjHxLK41_B4gBM6WxBpmivD-3CTWZQ124CTRPXn-dnvM/UPSWYNG+final+logo+set-03%281%29.png?format=500w"/>    
                      <p id="project-text">
                        UpSwyng provides information on providers who serve the homeless community in the Boulder area. 
                        Visit the live site here!
                      </p>
                    </div>
                </div>
                <div id="projects-row" className="row">
                    <div id="project">
                      <img id="project-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1540078586482-D0HTXLUMSIXZW5OFFFIX/ke17ZwdGBToddI8pDm48kPOSEzkVF7zCQe4EfxRR11oUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcD6gbN2SDmQMhTHlSk8NpROWOIDVVbBYoaVxBQh_kHKBxPHvqQvfprh9ot17nDuD7/Screenshot+2018-10-20+17.36.16.png?format=500w"/>    
                      <h4> Global Charity Finder </h4>
                      <p id="project-text">
                        Code for Boulder is working on a partnership with the City of Boulder to 
                        evaluate and improve the Open Data interfaces online.
                        Come to a meeting to learn more!
                      </p>
                    </div>
                    <div id="project">
                      <img id="project-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1564624309452-VK0Y0I5KLPTQCI8XXHU1/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/image-asset.jpeg?format=500w"/>    
                      <p id="project-text">
                        Loren Ipsum
                      </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project;