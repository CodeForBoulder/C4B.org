import React from 'react';
import './WhoWeAre.css';

export default function WhoWeAre() {
        return(
            <div className="container">
                <div id="who-we-are-div" className="row">
                    <p id="who-we-are-para">
                        Code for Boulder is a local non-profit that seeks to raise civic awareness through technology. 
                        As part of Code for America, our members are not just techies that understand the issues; 
                        we’re members of the community hoping to build better lives for everyone through the smart use of tech.
                        We seek to enrich the Boulder community through a variety of services:
                        Teach technical and soft skills, and applying these skills to meaningful projects
                        Support open data efforts
                        Provide boots on the ground for grassroots data initiatives
                        Create products that promote social good and government efficiency
                        Work with local stakeholders to create better civic projects
                        Incubate civic ideas from the community into viable MVPs, 
                        and find the people who can bring these products to a wider audience
                    </p>
                </div>
                <div id="who-we-are-image-row" className="row">
                    <img id="who-we-are-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1532568206221-4DPBDTJP7QZJMLMC7TNA/ke17ZwdGBToddI8pDm48kER99XzJSCVY9jo2M337vs17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mKsjHBOd62cZInIsOsdpMPEkjpxUmuDQrgYGd_3JVD-asZUz1AxDR3_cGGQ8tD2cA/Screenshot+2018-07-25+19.17.06.png?format=500w"></img>
                    <p id="who-we-are-text">WHO WE ARE</p>
                </div>
                <div id="guiding-principles-div" className="row">
                    <h2 id="guiding-principles-para-header">GUIDING PRINCIPLES</h2>
                    <p id="guiding-principles-para">
                        Solve real problems. We solve problems that real people have, 
                        we make sure what we build works for them, and we continuously improve it. 
                        We solve real problems instead of creating elegant code and robust systems to solve imagined ones.
                        Work with, not for the people we serve. 
                        We start with our users, the people affected by the service, 
                        and understand and respect their needs throughout the process. 
                        We also respect and support public servants, 
                        and when we are critical of government outcomes, we blame the system, not the people.
                        We build up -- from the user to the system, and from the local to the federal.
                        Work lean, iterate quickly. 
                        Get a working minimum viable product (MVP) in front of users as early as possible 
                        and make continuous improvements based on how they use the service.
                        Make it better with data. Inform iterations with data about user behavior. 
                        Evaluate programs based on statistically-sound ground-truthed data about outcomes.
                        Impact not ideology. Government that works for all people doesn’t belong to one party or ideology. 
                        We welcome all political and social views that respect the principle that 
                        government should work effectively for all Americans with respect and dignity.
                        Shape the market, don't capture the market. 
                        Government that works for all requires the vendor ecosystem to change to become more 
                        responsive to user needs. We have the potential to create the biggest change when our projects seek to shape, 
                        rather than capture, the market for government technology.
                        Non-partisan, but not neutral. We are an alliance of non-partisan groups, 
                        but that non-partisanship does not imply neutrality. 
                        This community has a vision for what government should be and will work to bring that vision into reality.
                        Default to open. 
                        Work in the open and collaborate with the community to help make programs and services better for everyone.
                    </p>
                </div>
            </div>
        )
}