import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import NewEvent from './pages/NewEvent'

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/new-events" component={NewEvents} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
