import ReactDOM from 'react-dom';
import React, {Component} from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Header from './header/Header'
import Home from './pages/home/Home';
import NewEvent from './pages/newEvent/NewEvent'
import WhoWeAre from './pages/whoWeAre/WhoWeAre'
import CodeOfConduct from './pages/codeOfConduct/CodeOfConduct'
import MeetingMinutes from './pages/meetingMinutes/MeetingMinutes'
import ProjectProposals from './pages/projectProposals/ProjectProposals'
import OpenDataSources from './pages/openDataSources/OpenDataSources'
import FundingSources from './pages/fundingSources/FundingSources'
import GetInvolved from './pages/getInvolved/GetInvolved'
import Projects from './pages/currentProjects/Projects'
import Footer from './footer/Footer'
import './index.css';
import noMatch from './pages/noMatch/noMatch';

var routing = (
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/new-events" component={NewEvent} />
                <Route exact path="/who-we-are" component={WhoWeAre} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/code-of-conduct" component={CodeOfConduct} />
                <Route exact path="/meeting-minutes" component={MeetingMinutes} />
                <Route exact path="/project-proposals" component={ProjectProposals}/>
                <Route exact path="/open-data-sources" component={OpenDataSources}/>
                <Route exact path="/funding-sources" component={FundingSources} />
                <Route exact path="/get-involved" component={GetInvolved} />
                <Route component={noMatch} />
            </Switch>
        </div>
    </Router>
)

class Root extends Component {
    render() {
        return (
        <div>
            <Header/>
            <div>
                {routing}
            </div>
            <Footer/>
        </div> 
        )       
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));