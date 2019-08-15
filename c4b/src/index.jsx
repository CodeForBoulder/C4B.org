import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/home/Home';
import NewEvent from './pages/newEvent/NewEvent'
import WhoWeAre from './pages/whoWeAre/WhoWeAre'
import CodeOfConduct from './pages/codeOfConduct/CodeOfConduct'
import MeetingMinutes from './pages/meetingMinutes/MeetingMinutes'
import ProjectProposals from './pages/projectProposals/ProjectProposals'
import OpenDataSources from './pages/openDataSources/OpenDataSources'
import FundingSources from './pages/fundingSources/FundingSources'
import GetInvolved from './pages/getInvolved/GetInvolved'
import './index.css';

var routing = (
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

class Root extends Component {
    render() {
        return (
        <div>
            <div class="header">
                <p> header </p>
            </div>
            <div class="body">
                {routing}
            </div>
            <div class="footer">
                <p> footer here, lol</p>
            </div>
        </div> 
        )       
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));