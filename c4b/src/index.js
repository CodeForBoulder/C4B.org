import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home';
import NewEvent from './pages/NewEvent'

const routing = (
    <Router>
        <div>
            <Route path="/home" component={Home} />
            <Route path="/new-events" component={NewEvent} />
        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));
