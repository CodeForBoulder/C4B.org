import React from 'react';
import './ProjectProposals.css';

export default function ProjectProposals() {
        return(
            <div className="container">
                <div id="start-here" className="row">
                    <div className="thumbnail">
                        <img id="start-here-image" src="https://images.squarespace-cdn.com/content/v1/5ab1bc5412b13f4dc838bc43/1538344653368-Y4C7ADL94E0G3KQ253EC/ke17ZwdGBToddI8pDm48kDHPSfPanjkWqhH6pl6g5ph7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0mwONMR1ELp49Lyc52iWr5dNb1QJw9casjKdtTg1_-y4jz4ptJBmI9gQmbjSQnNGng/IMG_20180923_122602.jpg?format=1500w"></img>
                        <p id="start-here-text">START HERE</p>
                    </div>
                </div>
                <div id="was-created" className="row">
                    <div id="was-created-div">    
                        <h2 id="was-created-header">CODE FOR BOULDER WAS CREATED TO HELP THE COMMUNITY.</h2>
                        <p id="was-created-para">tl;dr: Send your proposals to the email [cfbleaders ~ at ~ codeforboulder.org] with the subject line "Project Proposal: 'Your Proposal Title Here' and the information outlined below. A member of the brigade will contact you with feedback as soon as possible.</p>
                    </div>
                </div>
                <div id="proposing-a-project-div" className="row">    
                    <h2 id="proposing-a-project-header">PROPOSING A PROJECT</h2>
                    <p id="proposing-a-project-para">
                        Code For Boulder will take all projects that are altruistic and benefit the community at large. 
                        However, a project’s viability depends on several factors, many of which can be determined before the project even gets off the ground. 
                        Good project proposals will have thought these requirements through, making project planning and execution more tenable for the brigade.
                        A project should meet certain criteria to be viable for CfB:
                        Benefits the City or County directly
                        Benefits an underrepresented group in the City or County
                        Empowers the community through data or resource accessibility, e.g. ease of voter registration, knowledge of city/county resources, community organization tools
                        Things that a project should not contain:
                        Anything illegal
                        Anything blatantly partisan or biased towards/against a certain group
                        Anything that works against local or state government
                        Code for Boulder is not a job shop; we work with other organizations, not for.</p>
                </div>
                <div id="project-requirements-div" className="row">
                    <h2 id="project-requirements-headers">PROJECT DEFINITION AND REQUIREMENTS</h2>
                    <p id="project-requirements-para">
                        Project proposals should cover the following:
                        Stakeholders should be clearly defined. It is not assumed that the organization proposing the idea is the one that will see the project through.
                        The project has a tenable scope (time frame of 4-6 months).
                        A defined minimum viable product (MVP).
                        A plan to deploy and integrate the product into the framework of the project owner.
                        A description of planned funding and resources, if any.        
                        A description of the cause this helps to further in the community.
                        Definition is the most important phase of the entire project. A bad Definition phase can mean failure before the project even starts!
                        All projects must have a Project Manager (PM) throughout their lifetime. This does not mean that only one person must be a PM, but if leadership is handed over, it should be to someone intimately familiar with the project’s goals.    
                        If your proposal covers all of the above, great! Email it to [cfbleaders ~ at ~ codeforboulder.org] with the subject line "Project Proposal:
                        'Your Proposal Title Here'". Code for Boulder will review it and reply with feedback ASAP. 
                    </p>
                </div>
            </div>
        )
}