import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import NewEvent from './pages/NewEvent'
import WhoWeAre from './pages/WhoWeAre'
import CodeOfConduct from './pages/CodeOfConduct'
import MeetingMinutes from './pages/MeetingMinutes'
import ProjectProposals from './pages/ProjectProposals'
import OpenDataSources from './pages/OpenDataSources'
import FundingSources from './pages/FundingSources'
import GetInvolved from './pages/GetInvolved'

const routing = (
    <Router>
        <div>
            <Route path="/home" component={Home} />
            <Route path="/new-events" component={NewEvent} />
            <Route path="/who-we-are" component={WhoWeAre} />
            <Route path="/code-of-conduct" component={CodeOfConduct} />
            <Route path="/meeting-minutes" component={MeetingMinutes} />
            <Route path="/project-proposals" component={ProjectProposals}/>
            <Route path="/open-data-sources" component={OpenDataSources} />
            <Route path="/funding-sources" component={FundingSources} />
            <Route path="/get-involved" component={GetInvolved} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
